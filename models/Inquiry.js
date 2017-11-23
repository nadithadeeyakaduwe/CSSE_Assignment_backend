var mongoose = require('mongoose');
var site = require('mongoose').model('Site').schema;
var supplier = require('mongoose').model('Supplier').schema;

const InquirySchema = mongoose.Schema({

    inquiryId :{
        type : String,
        required : [true,'Id mandatory'],
        unique : true
    },
    subject :{
        type : String,
    },
    sender : {
        type: site,
        ref: 'Site'
    },
    receiver : {
        type: supplier,
        ref: 'Supplier'
    },    
    description : {
        type : String
    },


});

module.exports = mongoose.model('Inquiry',InquirySchema);
