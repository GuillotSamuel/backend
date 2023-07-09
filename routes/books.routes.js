const express = require("express");
const router = express.Router();
const booksCtrl = require("../controllers/books.controller");

router.get("/", booksCtrl.books);
/* router.get("/books/:id", booksCtrl.getBookById);
router.get("/books/bestrating", booksCtrl.getBooksBestRating);
router.post("/books", booksCtrl.createBook);
router.put("/books/:id", booksCtrl.updateBook);
router.delete("/books/:id", booksCtrl.deleteBook);
router.post("/books/:id/rating", booksCtrl.setBookRating); */

module.exports = router;
