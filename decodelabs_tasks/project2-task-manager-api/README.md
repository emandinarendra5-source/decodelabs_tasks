# Project 2 - Task Manager API

A Node.js + Express REST API for task management with CRUD operations.

## Features

- Get all tasks
- Get a task by ID
- Create new tasks
- Update tasks
- Delete tasks
- JSON payload handling

## Tech Stack

- Node.js
- Express

## How to Run

1. Install dependencies:
   - `npm install`
2. Start the server:
   - `node server.js` or `npm start` (if script configured)
3. Use API clients like Postman or curl at:
   - `http://localhost:3000/tasks`

## Notes

- Data is stored in `data/tasks.js` (in-memory module).
- Add routes in `routes/taskRoutes.js` and controller logic in `controllers/taskController.js`.
