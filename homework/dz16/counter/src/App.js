import React, { Component } from 'react';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div id="counter">
        <header>Counter</header>
        <div class="area" style={{ backgroundColor: '#df60ff' }}>
          < Counter />
        </div>
        <div class="area" style={{ backgroundColor: '#c6ffe7' }}>
          < Counter />
        </div>
        <div class="area" style={{ backgroundColor: '#65ddf8' }}>
          < Counter />
        </div>
        <div class="area" style={{ backgroundColor: '#e935ba' }}>
          < Counter />
        </div>
      </div>
    );
  }
}

export default App;