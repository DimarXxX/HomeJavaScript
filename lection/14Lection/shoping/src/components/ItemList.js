import React, { Component } from 'react';
import NewItem from './NewItem';
import './shop.css';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this);
  }

  render() {
    const is = this.state.items.map(i => <p key={i.id} className = "buy">{i.name}</p>);
    const iz = this.state.items.map(e => <p key={e.id} className = "num">{e.count}</p>);    
    return (
      <div className = "itemlist">
        <NewItem addSuperItem={this.addItem}/>
        <div className = 'box'>
        {is}
        {iz}
        </div>
      </div>
    );
  }

  addItem(name, count) {
    const newItems = [...this.state.items];
    newItems.push({id: Math.random(), name, count});
    this.setState({items: newItems});
  }
}

export default ItemList;
