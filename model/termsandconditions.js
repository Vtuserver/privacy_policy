const mongoose = require('mongoose');

const {Schema,model} = mongoose

const TermsandconditionsSchema = new Schema({
    websiteURL : {
        type: String,
        required: true,
    },
    websitename: {
        type: String,
        required: true,
    },
    appname: {
        type: String,
        required: true,
    },
    companyname: {
        type: String,
        required: true,
    },
    companyaddress: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: false,
    },
    email:{
        type: String,
        required: true,
    },
    phonenumber:{
        type: String,
        required: false,
    },
    websitepage:{
        type:String,
        required:false,
    },
    address:{
        type:String,
        required:true,
    }
});

const Termsandconditionsmodel = model("Termsandconditions", TermsandconditionsSchema);
module.exports = Termsandconditionsmodel