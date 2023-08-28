const db = require('../utill/database');

const axios = require('axios');

module.exports = class  Orders{
    constructor(o_id,ord_desc){
        this.o_id = o_id;
        this.ord_desc = ord_desc;
    }
    
    
    async fetchCustomers(){
        try{
            const customers = await axios.get("http://localhost:8080/books");
            console.log('customers from microServise',customers)
        }catch(err){
            console.log("error when interconnection with customer backend!!")

        }
    }

    

    
      


}