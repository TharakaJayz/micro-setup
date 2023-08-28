
const Customer = require('../models/customer');



// exports.getCustomers = async (req,res,next)  =>{
//     console.log('get customer working');
//      try{

//         const existingCustomers = await Customer.fetchAll();
//         console.log('exising customers',existingCustomers);
//         if(existingCustomers){
//             res.status(200).message('customer fetching successfull').json(existingCustomers);
//         }

//      }catch(err){
//         if(!err.statusCode){
//             err.statusCode = 404;
//             err.message = "error in getting customer details";
//             console.log('error',err)
//         }
//         next(err);
//      }
// }

exports.getCustomers = async (req, res, next) => {
    console.log('get customer working');
    try {
      const existingCustomers = await Customer.fetchAll();
      // console.log('existing customers', existingCustomers);
      
      if (existingCustomers) {
        res.status(200).json({
          message: 'Customer fetching successful',
          customers: existingCustomers
        });
      }
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 404;
        err.message = 'Error in getting customer details';
        // console.log('error', err);
      }
      next(err);
    }
  };


  exports.postCustomer = async (req,res,next)  =>{
    const name  = req.body.name;
    const address  = req.body.address;
    const age  = req.body.age;
    const id  = req.body.id;
    

    if(name ==='' ||address ==='' || age ==='' || id ===''){
      const error = new Error("not enough data for create a customer !!");
      error.statusCode = 400;
      error.message = "not enough data for create a customer !!!";
      next(error);
    }

    const customer = new Customer(name,age,address,id);

    try{

      const createdCustomer = await customer.createCustomer();
      res.status(200).json({
        message:'customer creation successfull !!'
      })

    }catch(err){
      if(!err.statusCode){
        err.statusCode = 406;
        err.message = "creating customer failed";
        err.data = err.sqlMessage;
      }
      // console.log('customer creation error',err)
      next(err);
    }
  }

  exports.deleteCustomer  = async (req,res,next) =>{
    const id = req.params.id.trim();
    let existCustomerLogic = false;
   
    const existingCustomers = await Customer.fetchAll();
    // console.log('exist customers',existingCustomers);
    for(let i = 0; i< existingCustomers.length;i++){
      if(existingCustomers[i].id == id){
        existCustomerLogic = true;
      }
    };
    

    if(!existCustomerLogic){
      const error = new Error('there is no any customer with this id!!');
      error.statusCode = 406;
      error.message = 'there is no any customer with this id in if!!';
      
      next(error);
    }
    
    try{
      const deletedCustomer  = await Customer.deleteCustomer(id);

      res.status(200).json({
        message:'customer deletion succefull !!'
      });

    }catch(err){

        err.statusCode = 406;
        err.message = 'there is no any customer with this id!!'
        err.data = err.sqlMessage;
      
      next(err);
    }

  }
  