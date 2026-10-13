const prisma = require('../config/db.js');
const IAService = require('./ia.service.js');

const ProductoService = {
  // Obtener todos los productos con sus relaciones
  getAll: async () => {
    return await prisma.productos.findMany({
      include: {
        categoria: true,
        detalleventa: true,
        ingredienteproducto: true,
        alergenoproducto: true,
      },
    });
  },

  // Obtener un producto por ID con todas sus relaciones
  getById: async (id) => {
    return await prisma.productos.findUnique({
      where: { id_producto: parseInt(id) },
      include: {
        categoria: true,
        detalleventa: true,
        ingredienteproducto: true,
        alergenoproducto: true,
      },
    });
  },

  // Crear un nuevo producto (básico)
  create: async (data) => {
    const {
      nombre_producto,
      id_categoria,
      stock,
      precio,
      descripcion,
      descripcion_corta,
      tags_seo,
      descuento,
    } = data;

    if (!nombre_producto || !id_categoria || !precio) {
      throw new Error('Faltan campos obligatorios');
    }

    const categoria = await prisma.categoria.findUnique({
      where: { id_categoria: parseInt(id_categoria) },
      select: { nombre_categoria: true },
    });
    const contenidoSEO = IAService.generarContenidoSEO({
      nombre_producto,
      categoria: categoria?.nombre_categoria,
    });

    return await prisma.productos.create({
      data: {
        nombre_producto,
        id_categoria: parseInt(id_categoria),
        stock: parseInt(stock) || 0,
        precio: parseFloat(precio),
        descripcion: descripcion || contenidoSEO.descripcion,
        descripcion_corta: descripcion_corta || contenidoSEO.descripcion_corta,
        tags_seo: tags_seo || contenidoSEO.tags_seo,
        seo_generado_en: new Date(),
        descuento: parseFloat(descuento) || 0.00,
      },
    });
  },

  // Actualizar producto (también puede actualizar descripción o descuento)
  update: async (id, data) => {
    const camposPermitidos = [
      'nombre_producto', 'id_categoria', 'stock', 'precio', 'descripcion',
      'descripcion_corta', 'tags_seo', 'descuento', 'seo_generado_en',
    ];
    const cambios = Object.fromEntries(
      Object.entries(data).filter(([campo]) => camposPermitidos.includes(campo))
    );
    if (cambios.id_categoria !== undefined) cambios.id_categoria = parseInt(cambios.id_categoria);
    if (cambios.stock !== undefined) cambios.stock = parseInt(cambios.stock);
    if (cambios.precio !== undefined) cambios.precio = parseFloat(cambios.precio);
    if (cambios.descuento !== undefined) cambios.descuento = parseFloat(cambios.descuento);
    return await prisma.productos.update({
      where: { id_producto: parseInt(id) },
      data: cambios,
    });
  },

  // Eliminar un producto
  delete: async (id) => {
    return await prisma.productos.delete({
      where: { id_producto: parseInt(id) },
    });
  },
};

module.exports = ProductoService;
