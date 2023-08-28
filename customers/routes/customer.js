const express = require('express');

const route = express.Router();

const customerControllers = require('../controllers/customer');

route.post('/customer',customerControllers.postCustomer);
route.get('/customer',customerControllers.getCustomers)

route.delete('/customer/:id',customerControllers.deleteCustomer)

module.exports = route;