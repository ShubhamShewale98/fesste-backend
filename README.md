# fesste-backend
# Blog Application Backend

This is the backend of a Blog Application built using Node.js, Express, and MongoDB. The backend provides RESTful APIs for user authentication, role-based access control, and blog management.

## Deployment

The application is deployed on render and can be accessed at the following URL:

- **Live Site**: [https://fesste-backend.onrender.com/](https://fesste-backend.onrender.com/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)


## Features

- **User Registration and Login**: Users can register and log in using JWT-based authentication.
- **Role-Based Access Control**: Two types of users: 'customer' and 'admin'.
  - Customers can create, edit, and delete their own blogs.
  - Admins can manage customer accounts (delete customers).
- **Blog Management**: Customers can create, read, update, and delete blogs.
- **Secure API Endpoints**: Protected routes using JWT authentication and role-based middleware.
- **Error Handling**: Comprehensive error handling for better API response management.

## Tech Stack

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user and blog data.
- **Mongoose**: ODM for MongoDB to handle database operations.
- **JSON Web Tokens (JWT)**: For secure user authentication.
- **bcryptjs**: For hashing passwords.
- **CORS**: For handling Cross-Origin Resource Sharing.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB installed and running, or use MongoDB Atlas for a cloud-based solution.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blog-backend.git
   cd blog-backend
