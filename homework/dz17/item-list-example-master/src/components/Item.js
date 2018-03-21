import React, { Component } from 'react';

import Button from './Button';

import './Item.css'

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCount: 0
    };

    this.increase = this.increase.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  render() {
    let className = 'Item';
    if (this.state.currentCount === this.props.item.count) {
      className += ' Item-done'
    }
    return(
      <section className={className}>
        <section>
          {this.props.item.name}
        </section>
        <section className="Item-stats">
          <section className="Item-count">
            <section>
              {this.state.currentCount}
            </section>
            /
            <section>
              {this.props.item.count}
            </section>
          </section>
          <section className="Item-actions">
            <Button text='up' click={this.increase}/>
            <Button text='remove'click={this.onRemove}/>
          </section>
        </section>
      </section>
    );
  }

  increase() {
    if (this.state.currentCount <  this.props.item.count) {
      this.setState({currentCount: this.state.currentCount + 1});
    }
  }

  onRemove() {
    this.props.remove(this.props.item.id);
  }
}