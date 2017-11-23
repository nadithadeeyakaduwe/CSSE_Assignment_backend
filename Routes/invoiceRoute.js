const express = require('express');
const invoice = require('../models/invoiceModule')
const router = express.Router();;

router.use(function (req,res,next) {
   console.log('Something happening');
   next();
});

router.get('/',function(req,res){
    res.json({message: 'welcome to product routes'});
});

router.route('/invoice')
    .get(function (req,res) {
        invoice.find(function(err,prod){
            if(err){
                console.log(err);
            }
            res.json(prod);
        });

    });


    router.route('/invoice')
        .post(function(req, res) {
            var inv = new invoice(req.body);
            inv.save(function(err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'invoice created!' });
            });

        });






module.exports= router;
