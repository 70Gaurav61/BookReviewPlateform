import express from "express";
import {
  addReview,
  updateReview,
  deleteReview,
  getReviewsByBook,
} from "../controllers/reviewController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router({ mergeParams: true });

// /api/books/:bookId/reviews
router.route("/")
  .post(protect, addReview)
  .get(getReviewsByBook);

// /api/books/:bookId/reviews/:id
router.route("/:id")
  .put(protect, updateReview)
  .delete(protect, deleteReview);

export default router;
