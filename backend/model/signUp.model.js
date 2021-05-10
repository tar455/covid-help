const mongoose = require('mongoose');

var Schema=mongoose.Schema;


var User =new Schema({
    email:String,
    password:String,
    confirmPassword:String
});

var UserModel =mongoose.model('signUp_DB',User);