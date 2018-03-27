import { Div } from 'glamorous';
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import AppBar from './AppBar/AppBar';
import Board from './Board/Board';
import Piano from './Piano/Piano';
import { playerContainer } from '../containers/player';

import { midiPlayer } from '../audio/player';
import { getKeyRange } from '../config/midi';
import { midiNotesMap } from '../tools/midi';
import { headerHeight, contentHeight, footerHeight } from '../config/app';
import { midiContainer } from '../containers/midi';

export default class App extends Component {
  setupEnvironment(result) {
    midiPlayer.loadArrayBuffer(result);
    getKeyRange(midiPlayer.getEvents());

    const ppq = midiPlayer.division * 4;
    const measures = midiPlayer.totalTicks / ppq;

    midiContainer.setState({
      absoluteMeasures: measures,
      measures: Math.ceil(measures),
      division: midiPlayer.division,
      notesMap: midiNotesMap(midiPlayer)
    });

    playerContainer.setState({
      totalTicks: midiPlayer.totalTicks,
      totalTime: midiPlayer.getSongTime(),
      notesMap: midiNotesMap(midiPlayer)
    });
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
            style={{ width: '100%', height: '100%', position: 'relative' }}
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
