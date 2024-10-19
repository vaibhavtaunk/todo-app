import React, { useState, useEffect } from 'react';
import { Container, Header, Segment, Loader, Message } from 'semantic-ui-react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { getTodos, createTodo, deleteTodo } from '../services/todoService';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
        setError('Failed to fetch todos.');
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = async (title) => {
    try {
      const newTodo = await createTodo({ title });
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Error creating todo:', error);
      setError('Failed to create todo.');
    }
  };

  const removeTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
      setError('Failed to delete todo.');
    }
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Header as='h1' textAlign='center' style={{ marginBottom: '30px' }}>
        Todo App
      </Header>
      {error && (
        <Message negative>
          <Message.Header>Error</Message.Header>
          <p>{error}</p>
        </Message>
      )}
      <Segment>
        <TodoForm addTodo={addTodo} />
      </Segment>
      {loading ? (
        <Loader active inline='centered'>
          Loading...
        </Loader>
      ) : (
        <TodoList todos={todos} removeTodo={removeTodo} />
      )}
    </Container>
  );
};

export default TodoPage;
