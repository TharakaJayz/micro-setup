const Order = require('../models/orders');

exports.postOrders  = async (req,res,next) =>{

    const order = new Order(112,"test description");
    const customers = await Order.fe
    res.json({
        message:"get orders working"
    })
}