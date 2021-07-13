const express = require('express');
const data =require('./patientdata.js');
const cors=require('cors');
const dotenv=require('dotenv');
const port=process.env.PORT  || 5000;
const  app=express();
const mongo=require('./config/configdb');
const UseRouter=require('./routes/PatientRouter');
const LoginRouter=require('./routes/LoginRouter');
app.use(cors());
dotenv.config();
app.use('/api',UseRouter);
app.use('/auth',LoginRouter);
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use('/data_needs/api',(req, res) => {
    
    res.send(data);
});
app.listen(port,()=>{
    console.log(`Backend server running on port ${port}`);
})