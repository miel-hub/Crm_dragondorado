const express = require('express');
const router = express.Router();

const AccesoQRController = require('../controllers/accesoqr.controller');


router.post(
  '/registrar',
  AccesoQRController.registrarAcceso
);

module.exports = router;