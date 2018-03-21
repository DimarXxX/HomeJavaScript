import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.onTextChange = this.onTextChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  render() {
    return (
      <section className="AddTodo">
        <input type="text" value={this.state.text} onChange={this.onTextChange} />
        <button onClick={this.onAdd}>Add</button>
      </section>
    )
  }

  onTextChange(e) {
    this.setState({text: e.target.value});
  }

  onAdd() {
    this.props.store.dispatch({ type: 'ADD_TODO', text: this.state.text, id: Date.now() });
  }
}

export default AddTodo;