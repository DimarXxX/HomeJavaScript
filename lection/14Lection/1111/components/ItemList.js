import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';



class ItemList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            items: []
        }

        this.addItem = this.addItem.bind(this);
    }
    render () {
        return(
            <div>
                <Header add={this.addItem}/>
            </div>
        )
    }

    addItem(item) {
        this.setState({
            items: [...this.state.items, item ]
    }
}
}

export default ItemList;