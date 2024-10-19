const todoService = require('../services/todoService');
const { isValidTitle } = require('../utils/validation');

exports.createTodo = async (req, res, next) => {
  try {
    if (!isValidTitle(req.body.title)) {
      const error = new Error('Invalid title');
      error.statusCode = 400;
      throw error;
    }
    const todo = await todoService.createTodo(req.body.title);
    res.status(201).send(todo);
  } catch (error) {
    next(error); // Forward the error to the centralized error handler
  }
};

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await todoService.getTodos();
    res.send(todos);
  } catch (error) {
    next(error); // Forward the error to the centralized error handler
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    if (req.body.title && !isValidTitle(req.body.title)) {
      const error = new Error('Invalid title');
      error.statusCode = 400;
      throw error;
    }
    const todo = await todoService.updateTodo(req.params.id, req.body);
    res.send(todo);
  } catch (error) {
    next(error); // Forward the error to the centralized error handler
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    await todoService.deleteTodo(req.params.id);
    res.send({ message: 'Todo deleted' });
  } catch (error) {
    next(error); // Forward the error to the centralized error handler
  }
};
