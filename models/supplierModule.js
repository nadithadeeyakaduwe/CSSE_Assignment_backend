var mongoose = require('mongoose');
const SupplierSchema = mongoose.Schema({

    supplierName :{
        type : String,
        required : [true,'Name mandatory'],
        unique : true
    },
    supplierID : {
        type : String
    },
    contactNumber : {
        landline : {
          type : Number
        },
        Mobile : {
          type : Number
        }
    }


});

module.exports = mongoose.model('Supplier',SupplierSchema);
