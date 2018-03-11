import React, { Component } from 'react';

import ItemModel from '../data/item';
import { items } from '../data/items';

import Item from './Item';
import NewItem from './NewItem';

import './ItemList.css';

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  render() {
    const list = this.state.items.map(item => <Item key={item.id} item={item} remove={this.remove}/>);
    return (
      <section className="ItemList">
        <NewItem  add={this.add}/>
        <section>
          {list}
        </section>
      </section>
    );
  }

  add(name, count) {
    const newItem = new ItemModel(name, count);
    this.setState({items: [...this.state.items, newItem]});
  }

  remove(id) {
    const { items } = this.state;
    const index = items.findIndex(item => item.id === id);
    if (index >= 0) {
      // except element with specified index
      const newItems = [
        ...items.slice(0, index),
        ...items.slice(index + 1, items.length)
      ];
      this.setState({items: newItems});
    }
  }
}