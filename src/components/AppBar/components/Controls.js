import 'boxicons';
import { Div } from 'glamorous';
import * as React from 'react';

import { midiPlayer } from '../../../audio/player';
import { headerHeight } from '../../../config/app';
import { playerContainer } from '../../../containers/player';
import { play } from '../../../tools/player';

export default class Controls extends React.Component {
  handleClick = event => {
    if (event.currentTarget) {
      // midiPlayer.play();
      play(midiPlayer.tempo, midiPlayer.division);
      playerContainer.setState({ isPlayerRunning: true });
    }
  };

  render() {
    return (
      <Div
        height="50%"
        display="flex"
        alignItems="center"
        backgroundColor="#107EB5"
        onClick={this.handleClick}
        justifyContent="space-around"
      >
        <box-icon name="play" color="white" size={`${headerHeight / 3}vh`}></box-icon>
        <box-icon name="pause" color="white" size={`${headerHeight / 3}vh`}></box-icon>
        <box-icon name="skip-next" color="white" size={`${headerHeight / 3}vh`}></box-icon>
        <box-icon name="skip-previous" color="white" size={`${headerHeight / 3}vh`}></box-icon>
      </Div>
    );
  }
}
