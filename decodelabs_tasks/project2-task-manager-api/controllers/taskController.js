let tasks = require("../data/tasks");

// GET all tasks
const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

// GET a task by ID
const getTaskById = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
};

// POST create a new task
const createTask = (req, res) => {
  const { title } = req.body;

  if (!title || typeof title !== "string" || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = {
    id: Date.now(),
    title: title.trim(),
    completed: false,
  };

  tasks.push(task);

  res.status(201).json(task);
};

// PUT update an existing task
const updateTask = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, completed } = req.body;

  if (title !== undefined) {
    if (typeof title !== "string" || !title.trim()) {
      return res.status(400).json({ message: "Title must be a non-empty string" });
    }

    task.title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({ message: "Completed must be boolean" });
    }

    task.completed = completed;
  }

  res.status(200).json(task);
};

// DELETE a task
const deleteTask = (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Invalid task ID" });
  }

  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.status(200).json({ message: "Task deleted" });
};

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };