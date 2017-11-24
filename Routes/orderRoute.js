const express = require('express');
const order = require('../models/orderModule')
const router = express.Router();
var nodemailer = require('nodemailer');

router.use(function (req,res,next) {
   console.log('Something happening');
   next();
});

router.get('/',function(req,res){
    res.json({message: 'welcome to product routes'});
});

router.route('/order')
    .get(function (req,res) {
        order.find(function(err,ordr){
            if(err){
                console.log(err);
            }
            res.json(ordr);
        });

    });


    router.route('/order')
        .post(function(req, res) {
            var ordr = new order(req.body);

            ordr.save(function(err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'product created!' });
            });

        });






module.exports= router;
