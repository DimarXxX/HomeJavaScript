import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.onTextChange = this.onTextChange.bind(this);
    props.store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <section className="Filter">
        <span>Filter: </span>
        <input type="text" value={this.props.store.getState().filter} onChange={this.onTextChange} />
      </section>
    )
  }

  onTextChange(e) {
    this.props.store.dispatch({ type: 'FILTER_CHANGED', filter: e.target.value });
  }
}

export default AddTodo;