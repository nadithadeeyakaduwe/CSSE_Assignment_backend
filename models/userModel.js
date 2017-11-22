var mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    fullname :{
        type : String,
        required : [true,'fullname mandatory']
    },
    username :{
        type : String,
        required : [true,'username mandatory'],
        unique : true
    },
    email : {
      type: String,
      unique : true
    },
    password : {
        type : String
    }


});

module.exports = mongoose.model('users',userSchema);
