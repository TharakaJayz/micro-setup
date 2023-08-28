const express = require('express');

const router = express.Router();

const bookController = require('../controllers/books');


router.get('/book' ,bookController.getBook);
router.post('/book',bookController.createBook);
router.delete('/book/:id',bookController.deleteBook);

router.get('/books',bookController.getBooks)
module.exports = router;