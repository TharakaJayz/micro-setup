const express = require('express');

const router = express.Router();

const orderRoutes = require('../controllers/orders');

router.get('/orders',orderRoutes.postOrders)


module.exports = router;