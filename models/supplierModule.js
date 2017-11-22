var mongoose = require('mongoose');
const SupplierSchema = mongoose.Schema({

    supplierName :{
        type : String,
        required : [true,'Name mandatory'],
        unique : true
    },
    Address :{
        type : String,
    },
    contactNumber : {
        landline : {
          type : Number
        },
        Mobile : {
          type : Number
        }
    },
    email : {
        type : String
    }


});

module.exports = mongoose.model('Supplier',SupplierSchema);
