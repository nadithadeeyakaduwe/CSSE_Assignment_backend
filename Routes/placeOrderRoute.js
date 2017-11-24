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
        placeOrder.find({
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


router.route('/placeOrder/orderId/:id')
    .put(function (req, res) {

        placeOrder.findOneAndUpdate(
            { OrderID: req.params.id },
            req.body
        ).then(function () {
            placeOrder.findOne({ OrderID: req.params.id }).then(function (response) {
                res.send(response);
            });

        });

    });

router.route('/placeOrder/Id/:id')
    .put(function (req, res) {

        placeOrder.findByIdAndUpdate(
            { _id: req.params.id },
            req.body
        ).then(function () {
            placeOrder.findOne({ _id: req.params.id }).then(function (response) {
                res.send(response);
            });

        });

    });

router.route('/placeOrder/orderType/:type')
    .get(function (req, res) {
        var type = req.params.type;
        placeOrder.find({
            'orderType': type
        },
            function (err, order) {
                if (err) {
                    console.log(err);
                }
                res.json(order);
            });

    });

router.route('/placeOrder/Oid/:id')
    .get(function (req, res) {
        var id = req.params.id;
        placeOrder.find({
            '_id': id
        }, function (err, order) {
            if (err) {
                console.log(err);
            }
            res.json(order);
        });

    });

router.route('/placeOrder/:orderType/status/:statusBySm')
    .get(function (req, res) {
        var type = req.params.orderType;
        var status = req.params.statusBySm;
        placeOrder.find({
            $and: [{ 'orderType': type },
            { 'orderStatusBySM': status }]

        }, function (err, order) {
            if (err) {
                console.log(err);
            }
            res.json(order);
        });

    });

router.route('/placeOrder/:orderType/supplier/:supplierName')
    .get(function (req, res) {
        var type = req.params.orderType;
        var supplier = req.params.supplierName;
        placeOrder.find({
            $and: [{ 'orderType': type },
            { 'supplierName': supplier }]

        }, function (err, order) {
            if (err) {
                console.log(err);
            }
            res.json(order);
        });

    });

router.route('/placeOrder/:orderType/id/:id')
    .get(function (req, res) {
        var type = req.params.orderType;
        var id = req.params.id;
        placeOrder.find({
            $and: [{ 'orderType': type },
            { 'OrderID': id }]

        }, function (err, order) {
            if (err) {
                console.log(err);
            }
            res.json(order);
        });

    });

router.route('/placeOrder/:orderType/date/:date')
    .get(function (req, res) {
        var type = req.params.orderType;
        var date = req.params.date;
        placeOrder.find({
            $and: [{ 'orderType': type },
            { 'requiredDate': date }]

        }, function (err, order) {
            if (err) {
                console.log(err);
            }
            res.json(order);
        });

    });


module.exports = router;