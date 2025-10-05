# Book Review Platform

A full-stack **Book Review Platform** built with **MERN stack (MongoDB, Express, React, Node.js)**. Users can **signup/login**, **add books**, **view book details**, and **write reviews**. JWT authentication ensures that only logged-in users can add books or post reviews.

---

## **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## **Features**

- User **signup** and **login** with **JWT authentication**
- Add, update, delete, and view books
- View single book details along with all reviews
- Add, update, and delete reviews for books
- Protected routes for authenticated users
- Responsive UI built with **React** and **Tailwind CSS**
- Error handling and alerts for API requests

---

## **Tech Stack**

- **Frontend:** React.js, React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Tools:** Postman, VS Code, Node.js, npm

---

## **Project Structure**

book-review-platform/
├── backend/
│ ├── server.js # Backend entry point
│ ├── config/db.js # MongoDB connection
│ ├── middleware/authMiddleware.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Book.js
│ │ └── Review.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── bookRoutes.js
│ │ └── reviewRoutes.js
│ └── controllers/
│ ├── authController.js
│ ├── bookController.js
│ └── reviewController.js
│
├── frontend/
│ ├── src/
│ │ ├── api/axios.js
│ │ ├── components/Navbar.jsx
│ │ ├── pages/
│ │ │ ├── Signup.jsx
│ │ │ ├── Login.jsx
│ │ │ ├── BookList.jsx
│ │ │ ├── BookDetails.jsx
│ │ │ └── AddBook.jsx
│ │ ├── routes/PrivateRoute.jsx
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── package.json
└── README.md
