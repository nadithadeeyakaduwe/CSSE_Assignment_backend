/**
 * Created by HPkavin on 6/21/2017.
 */

const express = require('express');
const Bear = require('../models/bear');
const router = express.Router();
var nodemailer = require('nodemailer');

router.use(function (req,res,next) {
   console.log('Something happening');
   next();
});

router.get('/',function(req,res){

    res.json({message: 'welcome to api'});
});

router.route('/Bear')
    .get(function (req,res) {
        Bear.find(function(err,bear){
            if(err){
                console.log(err);
            }
            res.json(bear);
        });

    });

module.exports= router;