import React, { Component } from 'react';

class Header extends Component {
    constructor (props) {
        super(props)
        this.state = { newItem: '', count: 0 };
        this.onChange = this.onChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onChangeCount = this.onChangeCount.bind(this);
    }
    render () {
        return (
            <div className = "head">
                <input type='text' id = "buy" value={this.state.newItem} onChange={this.onChange}/>
                <input type='text' id = "numders" value={this.state.count}  onChange={this.onChangeCount}/>
                <button id ="add" onClick={this.onAdd}>Add</button>
            </div>
        );
    }
    onChange(event) {
        this.setState({newItem: event.target.value});
    }

    onChangeCount(event) {
        this.setState({count: event.target.value});
    }
    
    onAdd() {
        const item = { id: Math.random, name: this.state.newItem, count: this.state.count };
        this.props.add(item);
    }
}
export default Header;