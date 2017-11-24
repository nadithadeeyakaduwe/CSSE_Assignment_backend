const express = require('express');
const placeOrder = require('../models/placeOrderModule')
const router = express.Router();
var nodemailer = require('nodemailer');

router.use(function (req, res, next) {
    console.log('Something happening');
    next();
});

router.get('/', function (req, res) {
    res.json({ message: 'welcome to place order routes' });
});

router.route('/placeOrder')
    .get(function (req, res) {
        placeOrder.find(function (err, ordr) {
          console.log("place Order trigred");
            if (err) {
                console.log(err);
            }
            res.json(ordr);
        });

    });

router.route('/placeOrder')
    .post(function (req, res) {
        var pOrder = new placeOrder(req.body);

        pOrder.save(function (err) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'order created!' });
        });

    });

router.route('/placeOrder/status/:status')
    .get(function (req, res) {
        var status = req.params.status;
        placeOrder.find({
            'orderStatusBySM': status
        }, function (err, order) {
            if (err) {
                console.log(err);
            }
            res.json(order);
        });

    });

router.route('/placeOrder/supplier/:supplier')
    .get(function (req, res) {
        var supplier = req.params.supplier;
        placeOrder.find({
            'supplierName': supplier
        }, function (err, order) {
            if (err) {
                console.log(err);
            }
            res.json(order);
        });

    });

router.route('/placeOrder/id/:id')
    .get(function (req, res) {
        var id = req.params.id;
        placeOrder.findOne({
            'OrderID': id
        }, function (err, order) {
            if (err) {
                console.log(err);
            }
            res.json(order);
        });

    });

router.route('/placeOrder/date/:date')
    .get(function (req, res) {
        var date = req.params.date;
        placeOrder.find({
            'requiredDate': date
        }, function (err, order) {
            if (err) {
                console.log(err);
            }
            res.json(order);
        });

    });

module.exports = router;
