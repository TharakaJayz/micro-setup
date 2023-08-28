const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const customerRoutes = require('./routes/customer');

app.use(bodyParser.json());

app.use(customerRoutes);


app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message || "errror in backend";
    const data = error.data || "no specific data for this error"
    res.status(status).json({message:message, data:data});
})


app.listen(5050 ,()  =>{
    console.log('connected to 5050')
})