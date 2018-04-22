import { Div } from 'glamorous';
import { Midiate } from 'midiate';
import * as React from 'react';
import Dropzone from 'react-dropzone';

import AppBar from './AppBar/AppBar';
import Board from './Board/Board';
import Piano from './Piano/Piano';

import { contentHeight, footerHeight, headerHeight } from '../config/app';
import { getKeyRange } from '../config/midi';
import { midiContainer } from '../containers/midi';
import { playerContainer } from '../containers/player';

export default class App extends React.Component {
  public setupEnvironment(result: ArrayBuffer) {
    const midiate = new Midiate(result);
    getKeyRange(midiate.notes);

    midiContainer.setState({
      division: midiate.division,
      measures: midiate.measures
    });

    playerContainer.setState({
      totalTicks: midiate.measures[midiate.measures.length - 1].to
    });
  }

  public onDrop = (acceptedFiles: File[], rejectedFiles: File[]) => {
    if (acceptedFiles.length) {
      const reader = new FileReader();
      reader.onload = () => this.setupEnvironment(reader.result);
      reader.onabort = () => 'file reading was aborted';
      reader.onerror = () => 'file reading has failed';

      reader.readAsArrayBuffer(acceptedFiles[0]);
    }
  };

  public render() {
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
