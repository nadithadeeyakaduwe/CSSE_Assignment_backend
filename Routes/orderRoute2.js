const express = require('express');
const order2 = require('../models/orderModule2')
const router = express.Router();
var nodemailer = require('nodemailer');

router.use(function (req, res, next) {
    console.log('Something happening');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'welcome to product routes' });
});

router.route('/order2')
    .get(function (req, res) {
        order2.find(function (err, ordr) {
            if (err) {
                console.log(err);
            }
            res.json(ordr);
        });

    });

router.route('/order2')
    .post(function (req, res) {
        var order = new order2(req.body);

        order.save(function (err) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'order created!' });
        });

    });


module.exports = router;
