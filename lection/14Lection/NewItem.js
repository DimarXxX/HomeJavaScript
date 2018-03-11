import React, { Component } from 'react';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      count: 0
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCount = this.onChangeCount.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  render() {
    return (
      <section>
        <input type='text' value={this.state.name} onChange={this.onChangeName}/>
        <input type='text' value={this.state.count} onChange={this.onChangeCount}/>
        <button onClick={this.onAdd}>Add</button>        
      </section>
    );
  }

  onChangeName(event) {
    this.setState({name: event.target.value});
  }

  onChangeCount(event) {
    this.setState({count: +event.target.value});
  }

  onAdd() {
    this.props.addSuperItem(this.state.name, this.state.count);
  }
}

export default NewItem;