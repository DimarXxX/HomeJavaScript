import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GifList from './components/GifList';

class App extends Component {
  render() {
    return (
      <div className="App">
      < GifList />
      </div>
    );
  }
}

export default App;
