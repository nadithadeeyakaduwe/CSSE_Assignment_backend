const express = require('express');
const suppliers = require('../models/supplierModule')
const router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function (req, res) {
    res.json({ message: 'welcome to supplier routes' });
});

router.route('/supplier')
    .get(function (req, res) {
        suppliers.find(function (err, supplier) {
            if (err) {
                console.log(err);
            }
            res.json(supplier);
        });

    });

router.route('/supplier')
    .post(function (req, res) {
        var supplier = new suppliers(req.body);

        supplier.save(function (err) {
            if (err)
                res.send(err);
            else
                res.json({ message: 'Supplier added!' });
        });

    });

//edit supplier
router.route('/supplier/:id')
    .put(function (req, res) {
        console.log("supplier updating");
        suppliers.findByIdAndUpdate(
            {_id:req.params.id},
            req.body
        ).then(function () {
            suppliers.findOne({_id: req.params.id}).then(function (response) {
                res.send(response);
            });

        });

    });


module.exports = router;

