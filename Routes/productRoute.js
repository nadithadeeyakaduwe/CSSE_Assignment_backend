const express = require('express');
const product = require('../models/productModule')
const router = express.Router();
var nodemailer = require('nodemailer');

router.use(function (req,res,next) {
   console.log('Something happening');
   next();
});

router.get('/',function(req,res){
    res.json({message: 'welcome to product routes'});
});

router.route('/product')
    .get(function (req,res) {
        product.find(function(err,prod){
            if(err){
                console.log(err);
            }
            res.json(prod);
        });

    });


    router.route('/product')
        .post(function(req, res) {
            var prod = new product(req.body);

            prod.save(function(err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'product created!' });
            });

        });






module.exports= router;
