var mongoose = require('mongoose');
const SiteSchema = mongoose.Schema({

    siteName :{
        type : String,
        required : [true,'ID mandatory'],
        unique : true
    },
    siteAddress : {
        type : String
    },
    siteContact : {
        landline : {
          type : Number
        },
        mobile : {
          type : Number
        }
    },
    siteEmail : {
        type : String
    },
});

module.exports = mongoose.model('Site',SiteSchema);
