import { Div } from 'glamorous';
import * as React from 'react';
import Dropzone from 'react-dropzone';

import AppBar from './AppBar/AppBar';
import Board from './Board/Board';
import Piano from './Piano/Piano';

import { midiPlayer } from '../audio/player';
import { contentHeight, footerHeight, headerHeight } from '../config/app';
import { getKeyRange } from '../config/midi';
import { midiContainer } from '../containers/midi';
import { playerContainer } from '../containers/player';
import { midiNotesMap } from '../tools/midi';

export default class App extends React.Component {
  public setupEnvironment(result: ArrayBuffer) {
    midiPlayer.loadArrayBuffer(result);
    getKeyRange(midiPlayer.getEvents());

    const ppq = midiPlayer.division * 4;
    const measures = midiPlayer.totalTicks / ppq;

    midiContainer.setState({
      absoluteMeasures: measures,
      division: midiPlayer.division,
      measures: Math.ceil(measures),
      notesMap: midiNotesMap(midiPlayer)
    });

    playerContainer.setState({
      currentTempo: midiPlayer.tempo,
      totalTicks: midiPlayer.totalTicks,
      totalTime: Math.ceil(midiPlayer.getSongTime())
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
