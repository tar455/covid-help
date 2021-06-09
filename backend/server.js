const express = require('express');
const data =require('./patientdata.js');
const cors=require('cors');
const port=process.env.PORT  || 5000;
const  app=express();
const mongo=require('./config/configdb');
const UseRouter=require('./routes/PatientRouter');
app.use(cors());

app.use('/api',UseRouter);
app.use('/data_needs/api',(req, res) => {
    
    res.send(data);
});
app.listen(port,()=>{
    console.log(`Backend server running on port ${port}`);
})
