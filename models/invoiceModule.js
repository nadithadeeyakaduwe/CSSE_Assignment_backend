var mongoose = require('mongoose');
//var sequenceGenerator = require('mongoose-sequence-plugin');
//var autoIncrement = require('mongoose-auto-increment');
//import autoIncrement from 'mongoose-easy-auto-increment';
var autoIncrement = require('mongoose-easy-auto-increment');


const invoiceSchema = mongoose.Schema({

    Site : {
        type: String
    },
    Items : [{
        type: String
    }],
    Order : {
        type: Number
    },
    totalAmount : {
      type : Number
    }

});


invoiceSchema.plugin(autoIncrement, {field : 'invoiceID'});



module.exports = mongoose.model('Invoice',invoiceSchema);
