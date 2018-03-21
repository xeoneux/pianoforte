import { Div } from 'glamorous';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import AppBar from './AppBar/AppBar';
import Board from './Board/Board';
import Piano from './Piano/Piano';

import { midiPlayer } from '../audio/player';
import { getKeyRange } from '../config/midi';
import { headerHeight, contentHeight, footerHeight } from '../config/app';

class App extends Component {
  setupEnvironment(result) {
    midiPlayer.loadArrayBuffer(result);
    getKeyRange(midiPlayer.getEvents());
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      const reader = new FileReader();
      reader.onload = () => this.setupEnvironment(reader.result);
      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');

      reader.readAsArrayBuffer(acceptedFiles[0]);
    }
  };

  render() {
    return (
      <div>
        <Div height={`${headerHeight}vh`}>
          <AppBar />
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
