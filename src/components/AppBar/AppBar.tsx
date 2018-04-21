import { Div } from 'glamorous';
import * as React from 'react';
import { Subscribe } from 'unstated';

import MidiContainer from '../../containers/midi';
import PlayerContainer from '../../containers/player';
import Controls from './components/Controls';
import Progress from './components/Progress';

export default class AppBar extends React.Component {
  public render() {
    return (
      <Div
        width="100%"
        height="100%"
        display="flex"
        position="relative"
        flexDirection="column"
      >
        <Subscribe to={[PlayerContainer]}>
          {player => (
            <React.Fragment>
              <Controls player={player} />
              <Subscribe to={[MidiContainer]}>
                {midi => <Progress midi={midi} player={player} />}
              </Subscribe>
            </React.Fragment>
          )}
        </Subscribe>
      </Div>
    );
  }
}
