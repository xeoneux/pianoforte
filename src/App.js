import React, { Component } from 'react';
import { Div } from 'glamorous';

import { headerHeight, contentHeight, footerHeight } from './config/app';

import Piano from './components/Piano/Piano';
import Board from './components/Board/Board';

class App extends Component {
  render() {
    return (
      <div>
        <Div height={`${headerHeight}vh`}>
          <Div display="flex">Header</Div>
        </Div>
        <Div height={`${contentHeight}vh`}>
          <Board />
        </Div>
        <Div height={`${footerHeight}vh`}>
          <Piano />
        </Div>
      </div>
    );
  }
}

export default App;
