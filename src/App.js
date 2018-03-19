import { Div } from 'glamorous';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { headerHeight, contentHeight, footerHeight } from './config/app';

import Piano from './components/Piano/Piano';
import Board from './components/Board/Board';

class App extends Component {
  onDrop(acceptedFiles, rejectedFiles) {
    console.log(acceptedFiles, rejectedFiles);
  }

  render() {
    return (
      <div>
        <Div height={`${headerHeight}vh`}>
          <Div display="flex">Header</Div>
        </Div>
        <Div height={`${contentHeight}vh`}>
          <Dropzone
            disableClick
            onDrop={this.onDrop}
            style={{ width: '100%', height: '100%' }}
          >
            <Board />
          </Dropzone>
        </Div>
        <Div height={`${footerHeight}vh`}>
          <Piano />
        </Div>
      </div>
    );
  }
}

export default App;
