import { get, post, patch, del } from '../utils/api';

export const getTodos = async () => {
  return await get('/todos');
};

export const createTodo = async (todo) => {
  return await post('/todos', todo);
};

export const updateTodo = async (id, todo) => {
  return await patch(`/todos/${id}`, todo);
};

export const deleteTodo = async (id) => {
  return await del(`/todos/${id}`);
};
