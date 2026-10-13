require('dotenv').config();
const express = require('express');
const app = require('./src/app');
const scheduler = require('./src/utils/scheduler');

const PORT = process.env.PORT || 3000;

app.use(express.json());

let estadoIoT = {
  cocina: { gas_ppm: 135, temperatura: 31.5, extractor: "ENCENDIDO" },
  frio: { temp_mariscos: -14.2, temp_carnes: 2.8, puerta: "CERRADA" },
  insumos: { arroz_kg: 38.5, sillao_litros: 2.4 },
  mesas: [
    { id: 1, estado: "LIBRE", alerta: "Ninguna", hora: "-" },
    { id: 2, estado: "OCUPADA", alerta: "Ninguna", hora: "12:15 PM" },
    { id: 3, estado: "ATENCION", alerta: "💳 Pide la Cuenta", hora: "12:28 PM" },
    { id: 4, estado: "OCUPADA", alerta: "Ninguna", hora: "12:20 PM" }
  ],
  historial: [
    "[12:28 PM] 🔔 Mesa 03 presionó botón físico: Pedir la Cuenta.",
    "[12:10 PM] ⚠️ Alerta Stock: Bidón de Sillao por debajo del 15% (2.4 L)."
  ]
};

app.get('/api/iot/estado', (req, res) => {
  res.json(estadoIoT);
});

app.post('/api/iot/mesa', (req, res) => {
  const { mesa_id, accion } = req.body;
  const horaActual = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const mesa = estadoIoT.mesas.find(m => m.id === Number(mesa_id));
  if (mesa) {
    if (accion === "LIBERAR") {
      mesa.estado = "LIBRE";
      mesa.alerta = "Ninguna";
      mesa.hora = "-";
      estadoIoT.historial.unshift(`[${horaActual}] ✅ Mozo atendió la Mesa 0${mesa_id}`);
    } else {
      mesa.estado = "ATENCION";
      mesa.alerta = accion;
      mesa.hora = horaActual;
      estadoIoT.historial.unshift(`[${horaActual}] 🔔 Mesa 0${mesa_id} presionó botón IoT: ${accion}`);
    }
  }
  res.json({ ok: true, estadoIoT });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  scheduler.iniciarScheduler();
});

process.on('SIGTERM', () => {
  console.log('SIGTERM recibido. Cerrando servidor...');
  scheduler.detenerScheduler();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT recibido. Cerrando servidor...');
  scheduler.detenerScheduler();
  process.exit(0);
});