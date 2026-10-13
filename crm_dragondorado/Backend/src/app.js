const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rutas = require("./routes/rutas");
const cookieParser = require("cookie-parser");
const { errorHandler } = require("./middlewares/errorHandler");
const apiScore = require("./routes/score");

const app = express();

// Middlewares
const allowedOrigins = [
  "http://localhost:5173",
  "https://thematically-demeritorious-emmy.ngrok-free.devs",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Permitir peticiones sin origen (como apps móviles o curl)
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.indexOf(origin) !== -1 ||
        origin.includes("ngrok-free.app")
      ) {
        callback(null, true);
      } else {
        callback(new Error("No permitido por CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.set('trust proxy', 1);

// Rutas
app.use("/api", rutas);
app.use("/api", apiScore);

// Health check endpoint (para Load Balancer de AWS)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "CRM Dragón Dorado - Chifa API",
    version: "1.0.0",
    status: "running",
  });
});

// Manejo de errores global
app.use(errorHandler);

module.exports = app;
