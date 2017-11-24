var mongoose = require('mongoose');
//var sequenceGenerator = require('mongoose-sequence-plugin');
//var autoIncrement = require('mongoose-auto-increment');
//import autoIncrement from 'mongoose-easy-auto-increment';
var autoIncrement = require('mongoose-easy-auto-increment');


const invoiceSchema = mongoose.Schema({

    Site : {
        type: String
    },
    date : {
      type : Date,
      default : Date.now
    },
    Order : {
        type: Number
    },
    Item : {
        type: String
    },
    qty : {
        type: Number
    },
    unitPrice : {
        type: Number
    },
    Amount : {
      type : Number
    },
    Status : {
      type : String,
      default : 'Rejected'
      //accepted or rejected by accountent
    }

});


invoiceSchema.plugin(autoIncrement, {field : 'invoiceID'});



module.exports = mongoose.model('Invoice',invoiceSchema);
