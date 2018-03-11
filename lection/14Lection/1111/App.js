import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemList />
      </div>
    );
  }
}

export default App;
