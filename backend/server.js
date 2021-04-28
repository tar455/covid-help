const express = require('express');
const data =require('./patientdata.js');
const  app=express();

app.get('/data_needs/api',(req, res) => {
    res.send(data);
});

app.listen(5000,()=>{
    console.log("Backend server running on port 5000");
})
