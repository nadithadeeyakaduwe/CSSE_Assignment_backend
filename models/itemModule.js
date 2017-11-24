var mongoose = require('mongoose');
var sequenceGenerator = require('mongoose-sequence-plugin');
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
        type : String,
        default: 'Normal'
        //special,normal
    },
    unitPrice : {
        type : Number
    }
   
});

module.exports = mongoose.model('Item', ItemSchema);
