const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/Covid-help";


mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true} ,err => {
    if (!err) {
        console.log("connected");
    }
    else
    {
        console.log("error"+err);
    }
})

require('../model/paitentModel');