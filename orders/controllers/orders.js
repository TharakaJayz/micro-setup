const Order = require("../models/orders");
const axios = require("axios");
exports.getOrders = async (req, res, next) => {
  console.log("get orders working!!");
  res.json({
    message: "get order working",
  });
};

exports.postOrders = async (req, res, next) => {
  const ordId = req.body.ordId;
  const ordDate = req.body.ordDate;
  const bookTitle = req.body.bookTitle.trim();
  const custName = req.body.custName;
  let bookId, custID;

  try {
    const books = await axios.get("http://localhost:8080/books");

    const booksData = books.data;
    for (let i = 0; i < booksData.length; i++) {
      if (booksData[i].title.toLowerCase() === bookTitle.toLowerCase()) {
        // console.log("data",booksData[i]);
        bookId = booksData[i]._id;
      }
    }

    if (!bookId) {
      const error = new Error("this book doesnot exist");
      error.statusCode = 404;
      error.message = "this book doesnot exist";
      next(error);
    }

    const customers = await axios.get("http://localhost:5050/customer");
    const customerData = customers.data.customers;

    for (let j = 0; j < customerData.length; j++) {
      let custNameList = customerData[j].name.split(" ");
      console.log(custNameList);
      for (let x = 0; x < custNameList.length; x++) {
        if (custNameList[x].toLowerCase() === custName.toLowerCase()) {
          custID = customerData[j].id;
        }
      }
    }

    if (!custID) {
      const error = new Error("this customer doesnot exist");
      error.statusCode = 404;
      error.message = "this customer doesnot exist";
      next(error);
    }
    console.log("customers", customerData);
    console.log("cust id", custID);
    console.log('book id',bookId);

    const createdOrder = new Order({
      ordDate:ordDate,
      ordId:ordId,
      bookId:bookId,
      custID:custID

    });
      let finishedOrder = await createdOrder.save()

    res.json({data:finishedOrder});
  } catch (error) {

    if (!error.statusCode) {
      error.statusCode = 400;
    }
  }

  // res.json({
  //   data: [ordId, ordDate, bookTitle, custName],
  // });
};

exports.testPost = (req, res, next) => {
  console.log("this requesst body", req.body);
  next();
};
