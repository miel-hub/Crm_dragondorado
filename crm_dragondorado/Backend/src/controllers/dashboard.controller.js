const prisma = require("../config/db.js");
const logger = require("../utils/logger.js");

const DashboardController = {
  // Obtener productos más vendidos por mes
  getProductosMasVendidos: async (req, res) => {
    try {
      const { mes, anio } = req.query;
      const currentYear = anio ? parseInt(anio) : new Date().getFullYear();
      const currentMonth = mes ? parseInt(mes) : new Date().getMonth() + 1;

      const startDate = new Date(currentYear, currentMonth - 1, 1);
      const endDate = new Date(currentYear, currentMonth, 0, 23, 59, 59);

      const productosVendidos = await prisma.$queryRaw`
        SELECT 
          p.id_producto,
          p.nombre_producto,
          SUM(dv.cantidad) as cantidad
        FROM detalleventa dv
        INNER JOIN productos p ON dv.id_producto = p.id_producto
        INNER JOIN ventas v ON dv.id_venta = v.id_venta
        WHERE v.fecha_venta BETWEEN ${startDate} AND ${endDate}
        GROUP BY p.id_producto, p.nombre_producto
        ORDER BY cantidad DESC
        LIMIT 10
      `;

      // Convertir BigInt a Number
      const formattedData = productosVendidos.map(item => ({
        ...item,
        cantidad: Number(item.cantidad)
      }));

      res.json(formattedData);
    } catch (error) {
      logger.error("Error al obtener productos más vendidos:", error);
      res.status(500).json({ message: "Error al obtener productos más vendidos" });
    }
  },

  // Obtener productos menos vendidos por mes
  getProductosMenosVendidos: async (req, res) => {
    try {
      const { mes, anio } = req.query;
      const currentYear = anio ? parseInt(anio) : new Date().getFullYear();
      const currentMonth = mes ? parseInt(mes) : new Date().getMonth() + 1;

      const startDate = new Date(currentYear, currentMonth - 1, 1);
      const endDate = new Date(currentYear, currentMonth, 0, 23, 59, 59);

      const productosVendidos = await prisma.$queryRaw`
        SELECT 
          p.id_producto,
          p.nombre_producto,
          COALESCE(SUM(dv.cantidad), 0) as cantidad
        FROM productos p
        LEFT JOIN detalleventa dv ON p.id_producto = dv.id_producto
        LEFT JOIN ventas v ON dv.id_venta = v.id_venta 
          AND v.fecha_venta BETWEEN ${startDate} AND ${endDate}
        GROUP BY p.id_producto, p.nombre_producto
        ORDER BY cantidad ASC
        LIMIT 10
      `;

      // Convertir BigInt a Number
      const formattedData = productosVendidos.map(item => ({
        ...item,
        cantidad: Number(item.cantidad)
      }));

      res.json(formattedData);
    } catch (error) {
      logger.error("Error al obtener productos menos vendidos:", error);
      res.status(500).json({ message: "Error al obtener productos menos vendidos" });
    }
  },

  // Obtener total de usuarios registrados por mes
  getTotalUsuariosRegistrados: async (req, res) => {
    try {
      const { mes, anio } = req.query;
      const currentYear = anio ? parseInt(anio) : new Date().getFullYear();
      const currentMonth = mes ? parseInt(mes) : new Date().getMonth() + 1;

      const startDate = new Date(currentYear, currentMonth - 1, 1);
      const endDate = new Date(currentYear, currentMonth, 0, 23, 59, 59);

      const totalUsuarios = await prisma.usuarios.count({
        where: {
          fecha_registro: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      res.json({ total: totalUsuarios, mes: currentMonth, anio: currentYear });
    } catch (error) {
      logger.error("Error al obtener total de usuarios registrados:", error);
      res.status(500).json({ message: "Error al obtener total de usuarios registrados" });
    }
  },

  // Obtener cantidad de accesos y tipo de acceso por mes
  getAccesosPorTipo: async (req, res) => {
    try {
      const { anio } = req.query;
      const currentYear = anio ? parseInt(anio) : new Date().getFullYear();

      const accesos = await prisma.$queryRaw`
        SELECT 
          MONTH(a.fecha_acceso) as mes,
          ta.nombre_tipoAcceso as tipo_acceso,
          COUNT(*) as cantidad
        FROM accesoqr a
        INNER JOIN tipoacceso ta ON a.id_tipoAcceso = ta.id_tipoAcceso
        WHERE YEAR(a.fecha_acceso) = ${currentYear}
        GROUP BY MONTH(a.fecha_acceso), ta.nombre_tipoAcceso, ta.id_tipoAcceso
        ORDER BY mes ASC, ta.nombre_tipoAcceso
      `;

      // Convertir BigInt a Number
      const formattedData = accesos.map(item => ({
        mes: Number(item.mes),
        tipo_acceso: item.tipo_acceso,
        cantidad: Number(item.cantidad)
      }));

      res.json(formattedData);
    } catch (error) {
      logger.error("Error al obtener accesos por tipo:", error);
      res.status(500).json({ message: "Error al obtener accesos por tipo" });
    }
  },

  // Obtener resumen general del dashboard
  getResumenDashboard: async (req, res) => {
    try {
      const { mes, anio } = req.query;
      const currentYear = anio ? parseInt(anio) : new Date().getFullYear();
      const currentMonth = mes ? parseInt(mes) : new Date().getMonth() + 1;

      const startDate = new Date(currentYear, currentMonth - 1, 1);
      const endDate = new Date(currentYear, currentMonth, 0, 23, 59, 59);

      // Total de usuarios registrados en el mes
      const totalUsuarios = await prisma.usuarios.count({
        where: {
          fecha_registro: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      // Total de ventas en el mes
      const totalVentas = await prisma.ventas.count({
        where: {
          fecha_venta: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      // Total de accesos en el mes
      const totalAccesos = await prisma.accesoqr.count({
        where: {
          fecha_acceso: {
            gte: startDate,
            lte: endDate,
          },
        },
      });

      // Ingresos totales del mes
      const ingresosTotales = await prisma.ventas.aggregate({
        where: {
          fecha_venta: {
            gte: startDate,
            lte: endDate,
          },
          estado: "confirmado",
        },
        _sum: {
          total: true,
        },
      });

      res.json({
        mes: currentMonth,
        anio: currentYear,
        totalUsuarios,
        totalVentas,
        totalAccesos,
        ingresosTotales: ingresosTotales._sum.total || 0,
      });
    } catch (error) {
      logger.error("Error al obtener resumen del dashboard:", error);
      res.status(500).json({ message: "Error al obtener resumen del dashboard" });
    }
  },
};

module.exports = DashboardController;
