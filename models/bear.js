var mongoose = require('mongoose');
const BearSchema = mongoose.Schema({

    name :{
        type : String,
        required : [true,'Name mandatory']
    },
    color : {
        type : String
    },
    weight : {
        type : String
    }


});

module.exports = mongoose.model('Bear',BearSchema);
