
'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/ProcumentSystem',function (err) {
   if(err){
       console.log(err);
   }
   console.log('connected');
});
mongoose.promese = global.Promise;

    const app = express();
    app.use(bodyparser.urlencoded({extended : true}));
    app.use(bodyparser.json());
    app.use(cors());
    app.use('/api',require('./Routes/BearRoute'));
    app.use('/procument',require('./Routes/companyRoute'));
    app.use('/procument',require('./Routes/productRoute'));
    app.use('/procument',require('./Routes/orderRoute'));
    

app.listen(4000,function (err) {
   if(err){
       console.log("server not listing");
   }
   console.log("server running");
});
