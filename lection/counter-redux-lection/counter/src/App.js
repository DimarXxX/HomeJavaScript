import React, {Component} from 'react';
import { connect } from 'react-redux';
import { increment, asyncIncrement } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        {this.props.count}
        <button onClick={this.props.asyncIncrement}>+</button>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    asyncIncrement: () => dispatch(asyncIncrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);