import React, { Component }from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.remove = this.remove.bind(this);
  }

  render() {
    const { todo } = this.props;
    return (
      <section className="Todo">
        <p>{todo.text}</p>
        <p className={todo.done ? 'Todo-completed' : 'Todo-uncompleted'} onClick={this.toggle}>
          {todo.done ? 'Completed' : 'Uncompleted'}
        </p>
        <button onClick={this.remove}>remove</button>
      </section>
    );
  }

  toggle() {
    this.props.store.dispatch({ type: 'TOGGLE_TODO', id: this.props.todo.id });
  }

  remove() {
    this.props.store.dispatch({ type: 'REMOVE_TODO', id: this.props.todo.id });
  }
}

export default Todo;