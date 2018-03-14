import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.increase = this.increase.bind(this);
    }
    render() {
        const value = this.state.value > 10
            ? String(this.state.value)
            : '0' + String(this.state.value);
        return (
            <section onClick = {this.increase} style={{backgroundColor : this.props.color}}>
            {this.state.value}
            </section>
        );
    }
    increase() {
        this.setState({value : this.state.value +1});
    }
}
export default Counter;