var express = require('express');
var router = express.Router();

var customerModel = require('../models/customerModel')

/* GET customers listing. */
router.get('/', async function(req, res, next) {
    const customers = await customerModel.getCustomers(5)
    res.json(customers);
    //res.render('customers/index', {customers:customers, count:13});
});

module.exports = router;
