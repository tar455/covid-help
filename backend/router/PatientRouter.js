const mongoose = require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const router=express.Router();

require('../model/paitentModel');
router.use(bodyParser.urlencoded({ extended: false }));

const PatientData=mongoose.model('Need_Patient');

router.use(bodyParser.json());
router.post('/staff',(req,res)=>{
        Data=new PatientData();
        Data.needs=req.body.needs;
        Data.name=req.body.name;
        Data.Phone=req.body.phone;
        Data.Address=req.body.address;
        Data.PinCode=req.body.pinCode;
        Data.BloodGroup=req.body.BloodGroup;
        Data.Massage=req.body.massage;
        Data.save();
        console.log("save successfully")
})
module.exports=router;