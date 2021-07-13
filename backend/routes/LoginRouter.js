const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const generateToken  = require('../utils');
const router = express.Router();
require('../model/signUp.model');
router.use(bodyParser.urlencoded({ extended: false }));
const User = mongoose.model('signUp_DB');

router.use(bodyParser.json());
router.post('/security_login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    // console.log(user);
    // console.log(req.body.password)
    // console.log(!bcrypt.compareSync(user.password,req.body.password));
    // console.log(req.body.email);
    if (user) {
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                email: user.email,
                password: user.password,
                confirmPassword:user.confirmPassword, 
                __v:user.__v,
                token: generateToken(user)
            });
            // console.log("You are here;");
            return;
        }
    }
    else
    {
        res.send({
            massage:"Your Are Not register"
        })
    }
    res.status(404).send({
        massage: 'Invalid email or Password'
    });
    console.log("error");
})

module.exports = router;