import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        props.store.subscribe(() => {
            this.setState({ value: props.store.getState() });
            props.store.subscribe(() => this.forceUpdate());
        });

        this.state = {
            value: props.store.getState()
        }

        this.increase = this.increase.bind(this);
    }

    render() {
        const value = this.state.value > 10
            ? String(this.state.value)
            : '0' + String(this.state.value);
        return (
            <section onClick={this.onIncrease} style={{ backgroundColor: this.props.color }}
                onIncrease={() => this.props.store.dispatch({ type: 'INCREMENT', i: 1 })}
            >
                {this.state.value}
            </section>
        );
    }
}
export default Counter;