var mongoose = require('mongoose');
const ItemSchema = mongoose.Schema({

    itemCode :{
        type : String,
        required : [true,'ID mandatory'],
        unique : true
    },
    itemName : {
        type : String
    },
    category : {
        type : String
    },
    unitPrice : {
        type : Number
    }
});

module.exports = mongoose.model('Item',ItemSchema);