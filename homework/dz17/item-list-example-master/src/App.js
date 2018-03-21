import React, { Component } from 'react';
import './App.css';
import ItemList from './components/ItemList';

class App extends Component {
  render() {
    return (
      <section className="App">
        <ItemList />
      </section>
    );
  }
}

export default App;
