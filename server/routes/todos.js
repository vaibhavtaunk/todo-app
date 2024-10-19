const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Define routes and delegate to controller functions
router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getTodos);
router.patch('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
