import Review from "../models/Review.js";
import Book from "../models/Book.js";

// Add Review
export const addReview = async (req, res) => {
  const { rating, reviewText } = req.body;
  const bookId = req.params.bookId;

  try {
    const existing = await Review.findOne({ book: bookId, user: req.user._id });
    if (existing)
      return res.status(400).json({ message: "You already reviewed this book." });

    const review = await Review.create({
      book: bookId,
      user: req.user._id,
      rating,
      reviewText,
    });

    await updateBookAverageRating(bookId);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Review
export const updateReview = async (req, res) => {
  const { rating, reviewText } = req.body;

  try {
    const review = await Review.findById(req.params.id);

    if (!review) return res.status(404).json({ message: "Review not found" });
    if (review.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    review.rating = rating || review.rating;
    review.reviewText = reviewText || review.reviewText;
    await review.save();

    await updateBookAverageRating(review.book);

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Review
export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) return res.status(404).json({ message: "Review not found" });
    if (review.user.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Not authorized" });

    await review.deleteOne();
    await updateBookAverageRating(review.book);

    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Reviews for a Book
export const getReviewsByBook = async (req, res) => {
  try {
    const reviews = await Review.find({ book: req.params.bookId })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Helper → Update Avg Rating in Book model
const updateBookAverageRating = async (bookId) => {
  const reviews = await Review.find({ book: bookId });
  const avgRating =
    reviews.length > 0
      ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
      : 0;

  await Book.findByIdAndUpdate(bookId, { averageRating: avgRating });
};
