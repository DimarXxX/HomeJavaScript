import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, text: 'Read article', done: true },
        { id: 2, text: 'Write letter', done: false },
        { id: 3, text: 'Change passport', done: false },
        { id: 4, text: 'Order pizza', done: true },
      ]
    }

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  render() {
    return (
      <section className="App">
        <AddTodo add={this.addTodo} />
        <TodoList todos={this.state.todos} toggle={this.toggleTodo} remove={this.removeTodo}/>
      </section>
    )
  }

  addTodo(text) {
    const newTodo = { id: Date.now(), text, done: false };
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        }
        return { ...todo, done: !todo.done };
      })
    });
  }

  removeTodo(id) {
    const index = this.state.todos.findIndex(todo => todo.id === id);
    const todos = this.state.todos;
    if (index > -1) {
      this.setState({ todos: [...todos.slice(0, index), ...todos.slice(index + 1)] });
    }
  }
}

export default App;