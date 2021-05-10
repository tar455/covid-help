const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

require('../model/paitentModel');
require('../model/signUp.model');
router.use(bodyParser.urlencoded({ extended: false }));

const PatientData = mongoose.model('Need_Patient');

router.use(bodyParser.json());
router.post('/staff', (req, res) => {
        Data = new PatientData();
        console.log(req.body)
        Data.need = req.body.need;
        Data.name = req.body.Name;
        Data.Phone = req.body.Phone;
        Data.Address = req.body.Address;
        Data.PinCode = req.body.PinCode;
        Data.BloodGroup = req.body.BloodGroup;
        Data.Message = req.body.Message;
        Data.save();
        console.log("save successfully")
})
const User_Data = mongoose.model('signUp_DB');
router.post('/login', (req, res) => {
        User = new User_Data();
        console.log(req.body)
        console.log(req.body.email);
        User.email = req.body.email;
        User.password = req.body.password;
        User.confirmPassword = req.body.confirmPassword;
        User.save();
        console.log("save successfully");
})
module.exports = router;