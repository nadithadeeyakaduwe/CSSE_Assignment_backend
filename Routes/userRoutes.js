const express = require('express');
const user = require('../models/userModel')
const router = express.Router();


router.use(function (req,res,next) {
   console.log('Something happening');
   next();
});

router.get('/',function(req,res){
    res.json({message: 'welcome to company routes'});
});




router.route('/user/:eml')
    .get(function (req,res) {
      var em = req.params.eml;
      //console.log(em);
        user.findOne({'email': em}, function(err,usr){
            if(err){
                console.log(err);
            }
            res.json(usr);
        });

    });

    router.route('/user')
        .get(function (req,res) {
            user.find(function(err,usr){
                if(err){
                    console.log(err);
                }
                console.log("trigger all route");
                res.json(usr);
            });

        });


    router.route('/user')
        .post(function(req, res) {
            var usr = new user(req.body);

            usr.save(function(err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: 'user created!' });
            });

        });


module.exports= router;
