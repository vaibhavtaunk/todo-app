const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const Todo = require('./models/todo');

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect('mongodb://localhost:27017/todo-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

// Create a new todo
app.post('/todos', async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
    });
    await todo.save();
    res.status(201).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a todo
app.patch('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.send({ message: 'Todo deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
});
