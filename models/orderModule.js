var mongoose = require('mongoose');
var company = require('mongoose').model('Company').schema;
var orderitem = require('mongoose').model('OrderItem').schema;

const orderSchema = mongoose.Schema({

    OrderID :{
        type : Number,
        required : [true,'OrderID mandatory'],
        unique: true
    },
    companyID : {
      type: company,
      ref: 'Company'
    },
    Priority : {
        type : String
    },
    orderItems : [{
      type: orderitem,
      ref: 'OrderItem'
    }]


});

module.exports = mongoose.model('orders',orderSchema);
