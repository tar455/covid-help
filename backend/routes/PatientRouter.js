const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
// var MongoClient = require('mongodb').MongoClient

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
        if (Data.save()) {
                console.log("save successfully")
        }
        else {
                res.send({
                        massage: "Some thing wrong !!Error"
                });
        }
})
const User_Data = mongoose.model('signUp_DB');
router.post('/login', (req, res) => {
        User = new User_Data();
        console.log(req.body)
        console.log(req.body.email);
        User.email = req.body.email;
        User.password = req.body.password;
        User.confirmPassword = req.body.confirmPassword;
        if (User.save()) {
                console.log("save successfully");
        }
        else {
                res.send(
                        {
                                "massage": "Register Successfullly"
                        }
                )
        }

})
router.get('/data_needs2', async (req, res) => {
        res.send(JSON.stringify(await PatientData.find()));
})
module.exports = router;