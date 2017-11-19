var mongoose = require('mongoose');
const CompanySchema = mongoose.Schema({

    companyID :{
        type : String,
        required : [true,'ID mandatory'],
        unique : true
    },
    CompanyName : {
        type : String
    },
    CompanyAddress : {
        type : String
    },
    CompanyContact : {
        landline : {
          type : Number
        },
        mobile : {
          type : Number
        }
    }


});

module.exports = mongoose.model('Company',CompanySchema);
