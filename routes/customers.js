var express = require('express');
var router = express.Router();

var customerModel = require('../models/customerModel')

/* GET customers listing. */
router.get('/', async function(req, res, next) {
    const customers = await customerModel.getCustomers(20)
    res.render('customers/index', {customers:customers});
});

module.exports = router;
