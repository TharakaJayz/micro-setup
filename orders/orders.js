const express = require('express');

const app  = express();

const orderRoutes = require('./routes/orders');


app.use(orderRoutes);

app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data || "no specific data about this error"
});


app.listen(6060 ,()  =>{
    console.log('connected to 6060')
});