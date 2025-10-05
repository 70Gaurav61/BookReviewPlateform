import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await API.get(`/books/${id}`);
        setBook(res.data);
        setReviews(res.data.reviews || []);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchBook();
  }, [id]);

  const handleReview = async () => {
    try {
      const res = await API.post("/reviews", { book: id, comment });
      setReviews([...reviews, res.data]);
      setComment("");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold">{book.title}</h2>
      <p className="text-gray-700">{book.author}</p>
      <p className="mt-2">{book.description}</p>

      <div className="mt-4">
        <h3 className="font-bold">Reviews:</h3>
        {reviews.map((r) => (
          <div key={r._id} className="border p-2 my-2 rounded">{r.comment}</div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a review"
          className="border p-2 flex-1"
        />
        <button onClick={handleReview} className="bg-blue-600 text-white px-4 rounded">Post</button>
      </div>
    </div>
  );
};

export default BookDetails;
