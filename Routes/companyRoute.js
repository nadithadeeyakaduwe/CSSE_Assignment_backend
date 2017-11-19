const express = require('express');
const company = require('../models/companyModule')
const router = express.Router();
var nodemailer = require('nodemailer');

router.use(function (req,res,next) {
   console.log('Something happening');
   next();
});

router.get('/',function(req,res){
    res.json({message: 'welcome to company routes'});
});

router.route('/company')
    .get(function (req,res) {
        company.find(function(err,comp){
            if(err){
                console.log(err);
            }
            res.json(comp);
        });

    });


    router.route('/company')
        .post(function(req, res) {
            var com = new company(req.body);      
           
            com.save(function(err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'Company created!' });
            });
    
        });






module.exports= router;
