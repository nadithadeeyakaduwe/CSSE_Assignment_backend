const express = require('express');
const site = require('../models/siteModule')
const router = express.Router();
var nodemailer = require('nodemailer');

router.use(function (req,res,next) {
   console.log('Something happening');
   next();
});

router.get('/',function(req,res){
    res.json({message: 'welcome to site routes'});
});

router.route('/site')
    .get(function (req,res) {
        site.find(function(err,sit){
            if(err){
                console.log(err);
            }
            res.json(sit);
        });

    });


    router.route('/site')
        .post(function(req, res) {
            var sit = new site(req.body);      
           
            sit.save(function(err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'site created!' });
            });
    
        });






module.exports= router;
