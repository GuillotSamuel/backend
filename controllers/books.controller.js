/* const db = require("./../models");
const Books = db.books;
const Ratings = db.Ratings;

 */
const { Book } = require('../models/books.models'); 



exports.books = async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

/* exports.books = async (req, res) => {
  try {
    const books = await Books.findAll();
    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json({ error: new Error("Something went wrong") });
  }
}; */

/* exports.getBookById = async (req, res) => {
  try {
    const bookId = req.params.id; // Logique
    const book = await Books.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.getBooksBestRating = async (req, res) => {
  try {
    // Logique
    const books = await Books.findAll({
      limit: 3,
      order: [["averageRating", "DESC"]],
    });

    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.createBook = async (req, res) => {
  try {
    const host = req.get("host");
    const userId = req.auth.userId;
    const title = req.body.title;
    const author = req.body.author;
    const imageUrl = `${req.protocol}://${host}/images/${req.file.filename}`;
    const year = req.body.year;
    const genre = req.body.genre;

    const work = await Works.create({
      userId,
      title,
      author,
      imageUrl,
      year,
      genre,
    });

    return res.status(201).json({ message: "Book created" });
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { book, image } = req.body;

    // Logique

    return res.status(200).json({ message: "Book updated" });
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Books.destroy({ where: { id: req.params.id } });

    return res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

exports.setBookRating = async (req, res) => {
    try {
      const bookId = req.params.id;
      const { userId, grade } = req.body;
  
      const book = await Books.findOne({ _id: bookId });
  
      if (!book) {
        return res.status(404).json({ error: "Book not found" });
      }
  
      book.ratings.push({ userId, grade });
  
      await book.save();
  
      return res.status(200).json(book);
    } catch (err) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  }; */