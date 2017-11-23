var mongoose = require('mongoose');
var site = require('mongoose').model('Site').schema;
var supplier = require('mongoose').model('Supplier').schema;
var item = require('mongoose').model('Item').schema;
//var orderitem = require('mongoose').model('OrderItem').schema;

const orderSchema2 = mongoose.Schema({

    OrderID :{
        type : Number,
        required : [true,'OrderID mandatory'],
        unique: true
    },
    priority : {
        type : String
        //High,Medium,Low
    },
    requiredDate : {
        type : Date
    },
    orderStatus : {
        type : String,
        default: ''
        //pending,inprogress,resloved,closed
    },
    orderType : {
        type : String,
        default: "Accepted"
        //HigherBill , Special, Accepted, Rejected
    },
    Supplier : {
        type: supplier,
        ref: 'Supplier'
    },
    Site : {
        type: site,
        ref: 'Site'
    },
    Items : {
        type: [item],
        ref: 'Item'
    }

});

module.exports = mongoose.model('orders2',orderSchema2);
