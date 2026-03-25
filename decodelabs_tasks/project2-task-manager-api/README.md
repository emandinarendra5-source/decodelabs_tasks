# ⚙️ Task Manager API

## 📌 Description

A RESTful Task Manager API built using Node.js and Express.js, extended with MongoDB database integration using Mongoose.

This project demonstrates backend development concepts including API design, data handling, and database persistence.

---

## 🚀 Features

- Create Task
- Get All Tasks
- Get Task by ID
- Update Task
- Delete Task
- Persistent storage using MongoDB Atlas
- Modular project structure
- Error handling

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## 📡 API Endpoints

### Get All Tasks
`GET /api/tasks`

### Get Task by ID
`GET /api/tasks/:id`

### Create Task
`POST /api/tasks`

Request body:
```json
{
  "title": "Task name"
}
```

### Update Task
`PUT /api/tasks/:id`

### Delete Task
`DELETE /api/tasks/:id`

## 🗄️ Database Integration (Project 3)

This project includes MongoDB integration:

- Data stored in MongoDB Atlas
- Mongoose schema used for tasks
- Data persists even after server restart

## 📂 Project Structure

```text
project2-task-manager-api/
│
├── server.js
├── routes/
├── controllers/
├── models/
├── config/
├── package.json
```

## ▶️ How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Add MongoDB connection string in `config/db.js`
3. Start server:
   ```bash
   npm run dev
   ```

Server runs at:
- http://localhost:5000

## 🎯 Learning Outcome

- REST API development
- Backend architecture
- Database integration
- CRUD operations
- Error handling