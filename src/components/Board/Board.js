import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import Marker from './components/Marker';
import Background from './components/Background';
import AppContainer from '../../containers/app';
import PianoContainer from '../../containers/piano';

class Board extends Component {
  render() {
    return (
      <div>
        <Subscribe to={[PianoContainer]}>
          {piano => <Background {...piano} />}
        </Subscribe>
        <Subscribe to={[AppContainer]}>{app => <Marker />}</Subscribe>
      </div>
    );
  }
}

export default Board;
