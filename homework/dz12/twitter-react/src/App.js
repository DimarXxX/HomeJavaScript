import React, { Component } from 'react';
import './App.css';
import NewTweet from './moduls/NewTweet';
import Thread from './moduls/Thread';

class App extends Component {
  render() {
    return (
      <section class = "content">
          < NewTweet />
          < Thread />
      </section>
    );
  }
}

export default App;
