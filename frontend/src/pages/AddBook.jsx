import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [form, setForm] = useState({ title: "", author: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/books", form);
      navigate("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <h2 className="text-xl font-bold">Add Book</h2>
        <input name="title" placeholder="Title" onChange={handleChange} className="p-2 border" />
        <input name="author" placeholder="Author" onChange={handleChange} className="p-2 border" />
        <textarea name="description" placeholder="Description" onChange={handleChange} className="p-2 border" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
