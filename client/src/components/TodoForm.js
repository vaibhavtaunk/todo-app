import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const onSubmit = () => {
    if (title.trim()) {
      addTodo(title);
      setTitle('');
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <Input
          ref={inputRef} // Use ref to manage focus
          type='text'
          placeholder='Enter Todo'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Field>
      <Button type='submit'>Add Todo</Button>
    </Form>
  );
};

export default TodoForm;
