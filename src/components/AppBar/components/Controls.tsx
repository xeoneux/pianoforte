import FontAwesome from '@fortawesome/fontawesome';
import { Div, I } from 'glamorous';
import * as React from 'react';

import faPause from '@fortawesome/fontawesome-free-solid/faPause';
import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faStepBackward from '@fortawesome/fontawesome-free-solid/faStepBackward';
import faStepForward from '@fortawesome/fontawesome-free-solid/faStepForward';

import { midiPlayer } from '../../../audio/player';
import { headerHeight } from '../../../config/app';
import { playerContainer } from '../../../containers/player';
import { play } from '../../../tools/player';

FontAwesome.library.add(faPlay);
FontAwesome.library.add(faPause);
FontAwesome.library.add(faStepForward);
FontAwesome.library.add(faStepBackward);

export default class Controls extends React.Component {
  public handleClick = (event: React.MouseEvent) => {
    if (event.currentTarget) {
      // midiPlayer.play();
      play(midiPlayer.tempo, midiPlayer.division);
      playerContainer.setState({ isPlayerRunning: true });
    }
  };

  public render() {
    return (
      <Div
        height="50%"
        display="flex"
        alignItems="center"
        backgroundColor="#107EB5"
        onClick={this.handleClick}
        justifyContent="space-around"
      >
        {[
          'fas fa-play',
          'fas fa-pause',
          'fas fa-step-forward',
          'fas fa-step-backward'
        ].map((c, i) => (
          <I
            key={i}
            className={c}
            color="white"
            fontSize={`${headerHeight / 3}vh`}
          />
        ))}
      </Div>
    );
  }
}
