var mongoose = require('mongoose');
const OrderItemSchema = mongoose.Schema({

    orderID :{
        type: Schema.Types.ObjectId,
        ref: 'orders',
        required : [true,'OrderID mandatory']
    },
    Product : {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    Qty : {
        type : Number
    },
    Amount : {
      type : Number
    }
});

module.exports = mongoose.model('OrderItem',OrderItemSchema);
