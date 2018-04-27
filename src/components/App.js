import React from 'react';
import { Div } from 'glamorous';
import { Midiate } from 'midiate';
import Dropzone from 'react-dropzone';

import Board from './Board/Board';
import Piano from './Piano/Piano';
import AppBar from './AppBar/AppBar';

import { getKeyRange } from '../config/midi';
import { midiContainer } from '../containers/midi';
import { playerContainer } from '../containers/player';
import { contentHeight, footerHeight, headerHeight } from '../config/app';

export default class App extends React.Component {
  setupEnvironment(result) {
    const midiate = new Midiate(result);
    console.log(getKeyRange(midiate.notes));

    midiContainer.setState({
      notes: midiate.notes,
      division: midiate.division,
      measures: midiate.measures
    });

    playerContainer.setState({
      totalMeasures: midiate.measures.length,
      totalTicks: midiate.measures[midiate.measures.length - 1].to
    });
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      const reader = new FileReader();
      reader.onload = () => this.setupEnvironment(reader.result);
      reader.onerror = () => console.log('file reading has failed');
      reader.onabort = () => console.log('file reading was aborted');

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
            disableClick={true}
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
