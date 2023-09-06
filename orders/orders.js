const express = require('express');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const app  = express();

const orderRoutes = require('./routes/orders');

app.use(bodyParser.json())

app.use(orderRoutes);

app.use((error,req,res,next)=>{
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data || "no specific data about this error"
    res.status(status).json({
      message:message,
      data:data
    })
});



try{

    mongoose.connect("mongodb+srv://tharakaprabhath300:Tp0718736614@cluster0.zmt7ut1.mongodb.net/micro_orders?retryWrites=true&w=majority");
    app.listen(6000, () => {
      console.log("connnected on 6060 successfully ");
    });
    
  
  }catch(error){
    console.log('error occured in db or PORT');
  }
  
  

// app.listen(6060 ,()  =>{
//     console.log('connected to 6060')
// });