import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const list = this.props.todos
      .map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          remove={this.props.remove}
          toggle={this.props.toggle}
        />
      );
    return (
      <section className="TodoList">
        {list}
      </section>
    )
  }
}

export default TodoList;