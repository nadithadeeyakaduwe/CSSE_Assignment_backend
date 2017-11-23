var mongoose = require('mongoose');
var monSeq = require('mongoose-sequence')('mongoose');
var invoiceProducts = require('mongoose').model('Product').schema;
var order = require('mongoose').model('orders').schema;
var sequenceGenerator = require('mongoose-sequence-plugin');

const InvoiceSchema = mongoose.Schema({
    OrderID :{
        type : order,
        ref : 'orders'
    },
    Date : {
        type : Date
    },
    Amount : {
        type : Number
    }
    // ,
    // itemList : [{
    //   type : invoiceProducts,
    //   ref : 'Product'
    // }]
});
InvoiceSchema.plugin(sequenceGenerator, {inc_field: 'InvoiceID'});

module.exports = mongoose.model('Invoice',InvoiceSchema);
