const express = require("express");

const app = express();
const mongoose = require('mongoose');
const bookRoutes = require("./routes/books");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bookRoutes);



app.use((error,req,res,next) =>{
  const status = error.statusCode || 500;
  const message = error.message || "some error in backend";
  res.status(status).json({message:message});
})

try{

  mongoose.connect("mongodb+srv://tharakaprabhath300:Tp0718736614@cluster0.zmt7ut1.mongodb.net/micro_books?retryWrites=true&w=majority");
  app.listen(8080, () => {
    console.log("connnected on 8080 successfully ");
  });
  

}catch(error){
  console.log('error occured in db or PORT');
}

