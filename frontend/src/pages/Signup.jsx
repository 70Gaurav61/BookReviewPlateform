import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", form);
      navigate("/login");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <h2 className="text-xl font-bold">Signup</h2>
        <input name="name" placeholder="Name" onChange={handleChange} className="p-2 border" />
        <input name="email" placeholder="Email" onChange={handleChange} className="p-2 border" />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="p-2 border" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
