var mongoose = require('mongoose');
var site = require('mongoose').model('Site').schema;
var order2 = require('mongoose').model('Orders2').schema;
var item = require('mongoose').model('Item').schema;
//var orderitem = require('mongoose').model('OrderItem').schema;

const invoiceSchema = mongoose.Schema({

    invoiceID :{
        type : Number,
        required : [true,'invoiceID mandatory'],
        unique: true
    },  
    Site : {
        type: site,
        ref: 'Site'
    },
    Items : {
        type: [item],
        ref: 'Item'
    },
    Order : {
        type: order2,
        ref: 'Orders2'
    },

});

module.exports = mongoose.model('Invoice',invoiceSchema);
