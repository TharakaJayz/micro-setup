const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    numberPages:{
        type:Number,
        require:true
    },
    publisher:{
        type:String,
        require:true
    }

});

module.exports = mongoose.model("Book",bookSchema);