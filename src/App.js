import React, { Component } from 'react';

import './App.css';

import Piano from './components/Piano/Piano';
import Board from './components/Board/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Header</h1>
        </div>
        <div className="App-content">
          <Board />
        </div>
        <div className="App-footer">
          <Piano />
        </div>
      </div>
    );
  }
}

export default App;
