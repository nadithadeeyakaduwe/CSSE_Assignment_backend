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
    orderStatusBySM : {
        type : String,
        default: ''
        //pending, inprogress, resloved, closed
    },
    orderStatusBySup : {
        type : String,
        default: ''
        //Accepted, Rejected
    },
    orderStatusByUprM : {
        type : String,
        default: "Accepted"
        // Accepted, Rejected
    },
    orderType : {
        type : String,
        default : "Normal"
        //HigherBill , Special, Normal
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

module.exports = mongoose.model('Orders2',orderSchema2);
