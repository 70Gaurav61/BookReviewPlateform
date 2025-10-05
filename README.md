# Book Review Platform

A full-stack **Book Review Platform** built with **MERN stack (MongoDB, Express, React, Node.js)**. Users can **signup/login**, **add books**, **view book details**, and **write reviews**. JWT authentication ensures that only logged-in users can add books or post reviews.

---

## **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
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

## **API Endpoints**
Auth

POST /api/auth/signup – Signup a new user

POST /api/auth/login – Login and get JWT token

Books

GET /api/books – Get all books

POST /api/books – Add a new book (protected)

GET /api/books/:id – Get single book details

PUT /api/books/:id – Update book (protected)

DELETE /api/books/:id – Delete book (protected)

Reviews

POST /api/reviews – Add a review (protected)

PUT /api/reviews/:id – Update review (protected)

DELETE /api/reviews/:id – Delete review (protected)

## **Usage**

Signup as a new user.

Login using your credentials.

View all books on the homepage.

Click on a book to see details and reviews.

Add a new book if logged in.

Post reviews for any book if logged in.

## **Future Enhancements**

Add ratings with stars.

Implement profile management for users.

Add pagination and search for books.

Improve UI/UX with modals and better layouts.

Add admin dashboard for managing books and reviews.
