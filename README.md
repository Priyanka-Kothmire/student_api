# Student Management System (Node.js + React)

This is a **RESTful API** built using **Node.js, Express, and MongoDB**, along with a **React.js frontend**, for managing student records. 
The system allows users to **perform CRUD operations on students and their marks** with **pagination support**.

---

## Features
-  **CRUD operations** for students and marks.
-  **Pagination** for fetching student data.
-  **MongoDB integration** using Mongoose.
-  **Postman API collection** for easy testing.
-  **Environment variables** stored in `.env`.
-  **React.js frontend** with Bootstrap UI.

---

##  Folder Structure

### ** Navigate to the Project Directory**
cd student_api

### ** Install Dependencies**
npm install
npm init-y

### ** Set Up Environment Variables**
- Create a `.env` file in the root directory.
- Add the following details:
  MONGO_URI=mongodb://localhost:27017/studentDB
  PORT=5000
  

### **Run the Server**
npm start
or with **Nodemon** (for development):
npm run dev

##  API Endpoints

### **Student API**

| POST   | `http://localhost:5000/studets` | Add a new student              
| GET    | `http://localhost:5000/studets` | Get all students (with pagination) 
| GET    | `http://localhost:5000/67b5b3a68bf2ec3f6e1e7d24` | Get a student by ID        
| PUT    | `/api/students/67b5b3a68bf2ec3f6e1e7d24` | Update a student by ID      
| DELETE | `/api/students/67b5b3a68bf2ec3f6e1e7d24` | Delete a student by ID      

### **Marks API**

| POST   | `http://localhost:5000/marks`    | Add marks for a student         
| GET    | `http://localhost:5000/studets`    | Get all marks (populated with student details) 
| PUT    | `http://localhost:5000/67b5b3a68bf2ec3f6e1e7d24` | Update marks by ID             
| DELETE | `http://localhost:5000/67b5b3a68bf2ec3f6e1e7d24` | Delete marks by ID            

---

## 📌 Pagination in API

To fetch students with pagination, send a **GET** request to:
http://localhost:5000/api/students?page=1&limit=5
- `page` - The page number (default: `1`).
- `limit` - The number of records per page (default: `5`).




### **Exporting Database Schema**
1. Open **MongoDB Compass** or **MongoDB Shell**.
2. Run:
   ```bash
   db.students.find().pretty()
   ```
3. Copy the output and save it as `database-schema.json`.

---


### ** Database Schema JSON**
- Run the following command in MongoDB and save the output:
  db.students.find().pretty()
- Save the output in a file named ****.

### **3⃣ Postman API Collection**
- Exported the Postman API Collection as `student_api.postman_collection.json`.

## 🖥️ Frontend Setup (React.js)

### Prerequisites:
- Install **Node.js** and **npm** (latest version recommended)
- Install **Bootstrap** for UI styling

### Steps to Run Frontend:
1. **Navigate to the Frontend Folder**
   
   cd student_management/frontend



## 📌 License
This project is open-source and free to use.


