import * as React from 'react';
import { Subscribe } from 'unstated';

import KeyboardContainer from '../../containers/keyboard';
import MidiContainer from '../../containers/midi';
import PlayerContainer from '../../containers/player';
import Background from './components/Background';
import Marker from './components/Marker';

class Board extends React.Component {
  public render() {
    return (
      <Subscribe to={[KeyboardContainer]}>
        {keyboard => (
          <React.Fragment>
            <Background keyboard={keyboard} />
            <Subscribe to={[PlayerContainer, MidiContainer]}>
              {(player, midi) => (
                <Marker keyboard={keyboard} player={player} midi={midi} />
              )}
            </Subscribe>
          </React.Fragment>
        )}
      </Subscribe>
    );
  }
}

export default Board;
