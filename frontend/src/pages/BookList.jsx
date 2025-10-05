import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await API.get("/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book._id} className="border p-4 rounded shadow">
          <h3 className="font-bold text-lg">{book.title}</h3>
          <p className="text-gray-700">{book.author}</p>
          <Link to={`/books/${book._id}`} className="text-blue-600 mt-2 inline-block">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
