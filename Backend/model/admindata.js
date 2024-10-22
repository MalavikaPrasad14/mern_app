const mongoose= require('mongoose');

const adminSchema=   mongoose.Schema({
    adminName: String,
    password: String,
    phno: Number
    

});

const aData=mongoose.model('user',adminSchema);


module.exports=aData;