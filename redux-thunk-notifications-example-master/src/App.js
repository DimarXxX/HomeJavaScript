import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './components/Page';
import { hideNotification, showNotification, showNotificationWithTimeout } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page notifications={this.props.notifications}
              showNotification={this.props.showNotification}
              showNotificationWithTimeout={this.props.showNotificationWithTimeout}
              hideNotification={this.props.hideNotification}/>
      </div>
    );
  }
}

const mapStateToProps = ({ notifications }) => {
  return {
      notifications
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showNotification: (text) => dispatch(showNotification(text)),
    hideNotification: (id) => dispatch(hideNotification(id)),
    showNotificationWithTimeout: (text) => dispatch(showNotificationWithTimeout(text))
  }
}

// const mapDispatchToProps = {
//   showNotification,
//   hideNotification,
//   showNotificationWithTimeout
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);

