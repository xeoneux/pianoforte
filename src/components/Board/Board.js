import React, { Component, Fragment } from 'react';
import { Subscribe } from 'unstated';

import Marker from './components/Marker';
import Background from './components/Background';
import PlayerContainer from '../../containers/player';
import KeyboardContainer from '../../containers/keyboard';
import MidiContainer from '../../containers/midi';

class Board extends Component {
  render() {
    return (
      <Fragment>
        <Subscribe to={[KeyboardContainer]}>
          {keyboard => <Background keyboard={keyboard} />}
        </Subscribe>
        <Subscribe to={[PlayerContainer, MidiContainer]}>
          {(app, midi) => <Marker app={app} midi={midi} />}
        </Subscribe>
      </Fragment>
    );
  }
}

export default Board;
