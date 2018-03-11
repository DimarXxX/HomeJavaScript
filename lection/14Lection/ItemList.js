import React, { Component } from 'react';
import NewItem from './NewItem';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
  }

  render() {
    const is = this.state.items.map(i => <p key={i.id}>{i.name + i.count}</p>);
    return (
      <section>
        <NewItem addSuperItem={this.addItem}/>
        {is}
      </section>
    );
  }

  addItem(name, count) {
    const newItems = [...this.state.items];
    newItems.push({id: Math.random(), name, count});
    this.setState({items: newItems});
  }
}

export default ItemList;