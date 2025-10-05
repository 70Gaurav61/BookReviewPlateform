import express from "express";
import {
  addBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .post(protect, addBook)      // Create book
  .get(getBooks);              // Public list (with pagination)

router.route("/:id")
  .get(getBookById)            // Public details
  .put(protect, updateBook)    // Update (owner only)
  .delete(protect, deleteBook);// Delete (owner only)

export default router;
