var mongoose = require('mongoose');
const SiteSchema = mongoose.Schema({

    siteName :{
        type : String,
        required : [true,'ID mandatory'],
        unique : true
    },
    siteaddress : {
        type : String
    },
    siteContact : {
        landline : {
          type : Number
        },
        mobile : {
          type : Number
        }
    }
});

module.exports = mongoose.model('Site',SiteSchema);
