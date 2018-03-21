import React, { Component } from 'react';

import Button from './Button';

import './NewItem.css';

import { itemReducer } from '../reducers/ListReducers';

export default class NewItem extends Component {
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
    const { name, count } = this.state;
    return (
      <section className="NewItem">
        Name:
        <input type="text" name="name" value={name} onChange={this.onChangeName}/>
        Count:
        <input type="text" name="count" value={count} onChange={this.onChangeCount}/>
        <Button text='add' click={this.onAdd} />
      </section>
    );
  }

  onChangeName(event) {
    this.setState({name: event.target.value})
  }

  onChangeCount(event) {
    const value = parseInt(event.target.value, 10);
    this.setState({count: value});
  }

  onAdd() {
    this.props.store.dispatch({type : 'ADD_LIST', name : this.state.name, count : this.state.count, id: Date.now()});
  }
}