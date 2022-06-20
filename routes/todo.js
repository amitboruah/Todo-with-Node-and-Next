const express = require("express");

const {
  getAllTodos,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/todo");

const router = express.Router();

// to get all the task
router.get("/", getAllTodos);

//to create the task
router.post("/", createTask);

//to update
router.put("/:id", updateTask);

//to delete
router.post("/:id", deleteTask);

module.exports = router;
