import Book from "../models/Book.js";

// @desc Add new book
// @route POST /api/books
export const addBook = async (req, res) => {
  try {
    const { title, author, description, genre, year } = req.body;

    if (!title || !author || !description || !genre || !year) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const book = await Book.create({
      title,
      author,
      description,
      genre,
      year,
      addedBy: req.user._id,
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all books with pagination
// @route GET /api/books?page=1
export const getBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;
    const totalBooks = await Book.countDocuments();
    const books = await Book.find()
      .populate("addedBy", "name email")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      books,
      currentPage: page,
      totalPages: Math.ceil(totalBooks / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get single book
// @route GET /api/books/:id
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("addedBy", "name email");
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update a book (only creator)
// @route PUT /api/books/:id
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    if (book.addedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to update this book" });
    }

    const { title, author, description, genre, year } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.genre = genre || book.genre;
    book.year = year || book.year;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Delete a book (only creator)
// @route DELETE /api/books/:id
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    if (book.addedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to delete this book" });
    }

    await book.deleteOne();
    res.json({ message: "Book removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
