const express = require('express');
const data =require('./patientdata.js');
const port=process.env.PORT  || 5000;
const  app=express();
const mongo=require('./config/configdb');
const UseRouter=require('./router/PatientRouter');

app.use('/api',UseRouter);
app.get('/data_needs/api',(req, res) => {
    res.send(data);
});
app.listen(port,()=>{
    console.log(`Backend server running on port ${port}`);
})
