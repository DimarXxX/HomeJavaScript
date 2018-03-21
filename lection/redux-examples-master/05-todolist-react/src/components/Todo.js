import React from 'react';
import './Todo.css';

const Todo = ({ todo, toggle, remove }) => {
  return (
    <section className="Todo">
      <p>{todo.text}</p>
      <p className={todo.done ? 'Todo-completed' : 'Todo-uncompleted'} onClick={() => toggle(todo.id)}>
        {todo.done ? 'Completed' : 'Uncompleted'}
      </p>
      <button onClick={() => remove(todo.id)}>remove</button>
    </section>
  );
}

export default Todo;