const express = require('express');
const item = require('../models/itemModule')
const router = express.Router();
var nodemailer = require('nodemailer');

router.use(function (req,res,next) {
   console.log('Something happening');
   next();
});

router.get('/',function(req,res){
    res.json({message: 'welcome to item routes'});
});

router.route('/item')
    .get(function (req,res) {
        item.find(function(err,item){
            if(err){
                console.log(err);
            }
            res.json(item);
        });

    });


    router.route('/item')
        .post(function(req, res) {
            var items = new item(req.body);

            items.save(function(err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'item created!' });
            });

        });


module.exports= router;
