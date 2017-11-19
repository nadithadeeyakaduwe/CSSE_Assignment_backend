var mongoose = require('mongoose');
const productSchema = mongoose.Schema({

    productName :{
        type : String,
        required : [true,'Name mandatory'],
        unique: true
    },
    discription : {
        type : String
    },
    unitprice : {
        type : Number
    }


});

module.exports = mongoose.model('Product',productSchema);
