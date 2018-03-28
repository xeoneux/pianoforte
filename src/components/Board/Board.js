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
      <Subscribe to={[KeyboardContainer]}>
        {keyboard => (
          <Fragment>
            <Background keyboard={keyboard} />
            <Subscribe to={[PlayerContainer, MidiContainer]}>
              {(player, midi) => (
                <Marker keyboard={keyboard} player={player} midi={midi} />
              )}
            </Subscribe>
          </Fragment>
        )}
      </Subscribe>
    );
  }
}

export default Board;
