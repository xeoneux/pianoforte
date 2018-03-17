import React, { Component } from 'react';

import './App.css';

import Piano from './components/Piano/Piano';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Header</h1>
        </div>
        <div className="App-content">
          <h1>Content</h1>
        </div>
        <div className="App-footer">
          <Piano />
        </div>
      </div>
    );
  }
}

export default App;
