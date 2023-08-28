const Book = require("../models/book");

exports.getBook = (req, res, next) => {
  console.log("get book router working");
  res.send("book route working");
  next();
};

exports.createBook = async (req, res, next) => {
  let title, author, numberPages, publisher;

  title = req.body.title;
  author = req.body.author;
  numberPages = req.body.numberPages;
  publisher = req.body.publisher;

  //  console.log(req.body);
  const book = new Book({
    title: title,
    author: author,
    numberPages: numberPages,
    publisher: publisher,
  });

  try{
    const savedBook = await book.save();

    if (savedBook) {
      res.send("book created!");
    } else {
      const error = new Error("book crating failed");
      error.statusCode = 500;
      error.message = "book crating failed";
      next(error);
    }

  }catch(error){
    if(!error.statusCode){
      error.statusCode = 404;
      
    }
  }
};

exports.getBooks = async (req, res, next) => {
  try {
    const booksInDb = await Book.find();

    if (booksInDb) {
      res.json(booksInDb);
    } else {
      const error = new Error("ther are no any books!!");
      error.statusCode = 404;
      error.message = "there are no any books!!";
      next(error);
    }

  } catch (error) {
    const errr = new Error('book finding error');
    error.statusCode = 500;
    error.message = 'book finding error';
  }
  // console.log("bookssin DB", booksInDb);
};

exports.deleteBook = async (req, res, next) => {
  const id = req.params.id;
  console.log("id to delete", id);

  try {
    const bookToDelete = await Book.findById(id);
  } catch (error) {}
};
