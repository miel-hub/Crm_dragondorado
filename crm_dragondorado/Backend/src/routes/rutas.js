const express = require('express');
const router = express.Router();

router.use('/accesoqr', require('./accesoqr.routes'));
router.use('/detalleventas', require('./detalleventa.routes'));
// router.use('/games', require('./game.routes'));
router.use('/productos', require('./productos.routes'));
router.use('/usuarios', require('./usuarios.routes'));
router.use('/ventas', require('./ventas.routes'));
router.use('/auth', require('./auth.routes'));
router.use('/tickets', require('./tickets.routes'));
router.use('/reseteo', require('./reseteo.routes'));
router.use('/mercadopago', require('./mercadopago.routes'));
router.use('/reclamaciones', require('./reclamaciones.routes'));
router.use('/dashboard', require('./dashboard.routes'));
router.use('/ia', require('./ia.routes'));
router.use('/chatbot', require('./ia.routes'));
router.use('/feedback', require('./feedback.routes'));
router.use('/email', require('./email.routes'));
router.use('/reservas', require('./reservas.routes'));

module.exports = router;
