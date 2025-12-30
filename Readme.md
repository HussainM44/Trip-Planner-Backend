# Trip Planner Backend 🌍✈️

This repository contains the **backend API** for the Trip Planner application.  
It handles all server-side logic, database operations, and RESTful APIs required for building and managing travel plans.

The backend is built using **Node.js, Express, and MongoDB**, following a **modular and scalable architecture**.

---

## 🔗 Frontend Repository

The frontend for this project is developed separately and can be found here:

👉 https://github.com/manarkhalil9/mini-travel-planner

The frontend consumes this backend’s APIs to:
- Display countries, cities, and attractions
- Allow users to create and manage trip plans
- Interact with trip and attraction data dynamically

---

## 🚀 Live Deployment

🔗 https://attractohub.onrender.com

---

## 📌 Purpose of the Project

The Trip Planner Backend serves as the core data and logic layer for a travel planning platform where users can:

- Explore tourist destinations across different countries and cities
- View attraction points with detailed information
- Add attraction points to a personalized trip plan
- Create, update, view, and delete trip plans

This backend is designed to seamlessly integrate with a web-based frontend application.

---

## 🚀 Key Functionalities

### 🗺️ Attractions Management
- Stores tourist attraction data including:
  - Attraction name
  - Country and city
  - Description and category
- Provides APIs to:
  - Retrieve all attractions
  - Filter attractions by location
  - Retrieve a specific attraction by ID

### 🧳 Trip Planning
- Enables users to create trip plans
- Supports adding and removing attraction points
- Allows updating and deleting trip plans
- Full CRUD functionality for trip-related data

### 🔄 RESTful API Design
- Follows REST standards
- Uses proper HTTP methods:
  - `GET` – Fetch data
  - `POST` – Create new data
  - `PUT / PATCH` – Update existing data
  - `DELETE` – Remove data

---

## 🧱 Project Architecture

The backend follows a **clean separation of concerns**:

### 📂 Controllers
- Handle business logic
- Process incoming requests and generate responses

### 📂 Routes
- Define API endpoints
- Connect routes to controller logic

### 📂 Models
- Define MongoDB schemas using Mongoose
- Enforce data structure and validation

### 📂 Middleware
- Centralized error handling
- Request validation
- Easily extendable for authentication

### 📂 Scripts
- Utility scripts for seeding or managing data

---

## 🗄️ Database

- **MongoDB** is used as the primary database
- **Mongoose** provides:
  - Schema-based modeling
  - Data validation
  - Query handling
- JSON files can be used for initial data population (e.g., attractions)

---

## ⚙️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Nodemon**
- **dotenv**

---

## 🧪 Development & Integration

- Backend runs independently of the frontend
- APIs can be tested using Postman or Insomnia
- Frontend communicates with backend via HTTP requests
- Suitable for full-stack integration