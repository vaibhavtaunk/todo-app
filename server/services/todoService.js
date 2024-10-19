const Todo = require('../models/todo');

exports.createTodo = async (title) => {
  const todo = new Todo({
    title,
  });
  return await todo.save();
};

exports.getTodos = async () => {
  return await Todo.find();
};

exports.updateTodo = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteTodo = async (id) => {
  return await Todo.findByIdAndDelete(id);
};
