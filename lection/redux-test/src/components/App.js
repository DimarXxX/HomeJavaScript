import React, {Component} from 'react';


const Counter = (props) => {
    return (
      <section>
        {props.value}
        <button onClick={props.onMulipiy}>*</button>
        <button onClick={props.onDivide}>/</button>
      </section>
    );
  }

  export default class App extends Component {
      constructor(props) {
          super(props)
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
                onMulipiy={() => this.props.store.dispatch({type: 'MULTIPIY'})}
                onDivide={() => this.props.store.dispatch({type: 'DIVIDE'})}/>
            )
          }
      }
