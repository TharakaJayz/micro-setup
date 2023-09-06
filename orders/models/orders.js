// const db = require('../utill/database');


// module.exports = class  Orders{
//     constructor(o_id,ord_desc){
//         this.o_id = o_id;
//         this.ord_desc = ord_desc;
//     }
    
    
//     async fetchCustomers(){
//         try{
//             const customers = await axios.get("http://localhost:8080/books");
//             console.log('customers from microServise',customers)
//         }catch(err){
//             console.log("error when interconnection with customer backend!!")
            
//         }
//     }
    
// }

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const axios = require('axios');

const orderSchema = new Schema({
    ordId:{
        type:String,
        require:true
    },
    ordDate:{
        type:String,
        require:true
    },
    bookId:{
        type:String,
        require:true
    },
    custID:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("order",orderSchema);

