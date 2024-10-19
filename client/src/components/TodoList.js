import React from 'react';
import { List, Button } from 'semantic-ui-react';

const TodoList = ({ todos, removeTodo }) => (
  <List divided relaxed>
    {todos.map((todo) => (
      <List.Item key={todo.id}>
        <List.Content floated='right'>
          <Button onClick={() => removeTodo(todo.id)} color='red'>
            Delete
          </Button>
        </List.Content>
        <List.Content>
          <List.Header>{todo.title}</List.Header>
        </List.Content>
      </List.Item>
    ))}
  </List>
);

export default TodoList;
