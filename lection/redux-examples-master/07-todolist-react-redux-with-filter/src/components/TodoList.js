import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);

    props.store.subscribe(() => this.forceUpdate());
  }

  render() {
    const {todos, filter} = this.props.store.getState();
    const list = todos
      .filter(todo => todo.text.includes(filter))
      .map(todo =>
        <Todo
          store={this.props.store} 
          key={todo.id}
          todo={todo}
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