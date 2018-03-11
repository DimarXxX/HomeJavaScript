import React, { Component } from 'react';

class Item extends Component {
    constructor (props) {
        super(props)
        this.state = { count : 0 }
    }
    render () {
        return (
            <div className = "item">
            <p></p>
            <p></p>
            <p></p>
            <button className = "delete">delete</button>
            </div>
        );
    }
}

export default Item;