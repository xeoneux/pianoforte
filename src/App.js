import React, { Component } from 'react';

import './App.css';

import Piano from './components/Piano/Piano';

class App extends Component {
  render() {
    return (
      <div class="App">
        <div class="App-header">
          <h1>Header</h1>
        </div>
        <div class="App-content">
          <h1>Content</h1>
        </div>
        <div class="App-footer">
          <h1>Footer</h1>
        </div>
      </div>
    );
  }
}

export default App;
