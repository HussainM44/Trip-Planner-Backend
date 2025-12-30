
# Attracto Backend 🌍✈️

This repository contains the **backend API** for the Trip Planner application.  
It is responsible for managing tourist destinations, attraction points, and trip plans, allowing users to build and manage customized travel itineraries.

The backend is built using **Node.js, Express, and MongoDB**, following a **modular and scalable architecture**.

---

## 📌 Purpose of the Project

The Trip Planner Backend serves as the core data and logic layer for a travel planning platform where users can:

- Browse tourist attractions by country and city
- Add attraction points to their personal trip plans
- Create, view, update, and delete trip plans
- Retrieve structured travel data efficiently through REST APIs

This backend is designed to be easily connected to a frontend web or mobile application.

---

## 🚀 Key Functionalities

### 🗺️ Attractions Management
- Stores tourist attractions with details such as:
  - Name
  - Location (country / city)
  - Description
  - Category or type
- Provides API endpoints to:
  - Fetch all attractions
  - Fetch attractions by location
  - Fetch a single attraction by ID

### 🧳 Trip Planning
- Allows users to create trip plans
- Users can:
  - Add multiple attractions to a trip
  - Remove attractions from a trip
  - Update trip details
- Supports full **CRUD operations** for trip plans

### 🔄 RESTful API Design
- Follows REST standards using:
  - `GET` for fetching data
  - `POST` for creating data
  - `PUT / PATCH` for updating data
  - `DELETE` for removing data
- Clean and predictable API routes

---

## 🧱 Project Architecture

The backend follows a **separation of concerns** approach:

### 📂 Controllers
- Handle application logic
- Process requests and send responses
- Keep route files clean and readable

### 📂 Routes
- Define API endpoints
- Map HTTP methods to controller functions

### 📂 Models
- Define MongoDB schemas using Mongoose
- Ensure consistent data structure and validation

### 📂 Middleware
- Handle reusable logic such as:
  - Error handling
  - Request validation
  - Authentication (if extended later)

### 📂 Scripts
- Utility scripts for database operations or data seeding

---

## 🗄️ Database

- Uses **MongoDB** as the primary database
- **Mongoose** is used for:
  - Schema modeling
  - Data validation
  - Query abstraction
- JSON data (e.g., attractions data) can be used for seeding the database

---

## ⚙️ Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **Mongoose** – ODM for MongoDB
- **Nodemon** – Development auto-reload
- **dotenv** – Environment variable management

---

## 🌟 Specialties of This Repository

✔ Modular and scalable folder structure  
✔ Clean separation between routes, controllers, and models  
✔ Easy to extend with authentication and user management  
✔ Frontend-agnostic (works with React, Flutter, etc.)  
✔ Designed for real-world travel planning use cases  

---

## 🧪 Development Experience

- Simple setup and run process
- Easy to test APIs using Postman or Insomnia
- Structured codebase suitable for team collaboration

---

## 🔮 Future Improvements (Optional)

- User authentication & authorization
- Saved trips per user
- Reviews and ratings for attractions
- Trip sharing feature
- Swagger / OpenAPI documentation

---

## 👨‍💻 Author

**HussainM44**  
Backend for a full-stack Trip Planner application.

---

## 📄 License

This project is licensed under the **MIT License**.