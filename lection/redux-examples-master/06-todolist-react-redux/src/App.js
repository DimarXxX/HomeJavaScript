import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <section className="App">
        <AddTodo store={this.props.store} />
        <TodoList store={this.props.store} />
      </section>
    )
  }
}

export default App;