import { createStore } from 'redux';
import { todos } from './reducers/todos';

const initialState = [
  { id: 1, text: 'Read article', done: true },
  { id: 2, text: 'Write letter', done: false },
  { id: 3, text: 'Change passport', done: false },
  { id: 4, text: 'Order pizza', done: true },
];
const store = createStore(todos, initialState);

export default store;
