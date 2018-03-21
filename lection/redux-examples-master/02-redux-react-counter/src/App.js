import React, {Component} from 'react';


const Counter = (props) => {
  return (
    <section>
      {props.value}
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </section>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);

    props.store.subscribe(() => {
      this.setState({value: props.store.getState()});
    });

    this.state = {
      value: props.store.getState()
    }
  }

  render() {
    return (
      <Counter
        value={this.state.value}
        onIncrement={() => this.props.store.dispatch({type: 'ADD' , text: '123'})}
        onDecrement={() => this.props.store.dispatch({type: 'MINUS'})}/>
    )
  }
}