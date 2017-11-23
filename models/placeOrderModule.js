var mongoose = require('mongoose');

const placeOrderSchema = mongoose.Schema({

    OrderID :{
        type : Number,
        required : [true,'OrderID mandatory'],
        unique: true
    },
    priority : {
        type : String
        //High,Medium,Low
    },
    requiredDate : {
        type : Date
    },
    orderStatusBySM : {
        type : String,
        default: ''
        //pending, inprogress, resloved, closed
    },
    orderStatusBySup : {
        type : String,
        default: ''
        //Accepted, Rejected
    },
    orderStatusByUprM : {
        type : String,
        default: "Accepted"
        // Accepted, Rejected
    },
    orderType : {
        type : String,
        default : "Normal"
        //HigherBill , Special, Normal
    },
    supplierName : {
        type: String,
    },
    Address :{
        type : String,
    },
    contactNumber : {
        landline : {
          type : Number
        },
        Mobile : {
          type : Number
        }
    },
    email : {
        type : String
    },
    siteName :{
        type : String,
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
    Items : [{
        itemCode :{
            type : String,
        },
        itemName : {
            type : String
        },
        category : {
            type : String
        },
        unitPrice : {
            type : Number
        },
        quantity :{
            type : Number
        }
    }]

});

module.exports = mongoose.model('placeOrder',placeOrderSchema);