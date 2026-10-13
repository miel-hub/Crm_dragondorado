const prisma = require("../config/db.js");
const AccesoQRController = {
  registrarAcceso: async (req, res) => {
    try {
      // 1. Obtener datos del body
      const { tipoAccesoId } = req.body;

      // 2. Validación 
      if (tipoAccesoId !== 1 && tipoAccesoId !== 2) {
        return res
          .status(400)
          .json({ message: "ID de tipo de acceso no válido." });
      }

      // 3. Lógica de BD 
      const nuevoAcceso = await prisma.accesoqr.create({
        data: {
          fecha_acceso: new Date(),
          id_tipoAcceso: parseInt(tipoAccesoId),
          // id_usuario se omite intencionalmente para que sea NULL
        },
      });

      // 4. Respuesta 
      res.status(201).json(nuevoAcceso);

    } catch (error) {
      // 5. MANEJO DE ERROR 
      console.error("Error al registrar acceso:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};

module.exports = AccesoQRController;