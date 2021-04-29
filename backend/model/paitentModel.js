const mongoose=require('mongoose');

var Schema = mongoose.Schema;

var Patient = new Schema({
  need: String,
  name: String,
  Phone:String,
  Address:String,
  PinCode:String,
  BloodGroup:String,
  Message:String
});

// Compile model from schema
var SomeModel = mongoose.model('Need_Patient', Patient );