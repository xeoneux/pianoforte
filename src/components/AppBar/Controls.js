import FontAwesome from '@fortawesome/fontawesome';
import { Div, I } from 'glamorous';
import React, { Component } from 'react';

import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';
import faStepForward from '@fortawesome/fontawesome-free-solid/faStepForward';
import faStepBackward from '@fortawesome/fontawesome-free-solid/faStepBackward';

import { headerHeight } from '../../config/app';

import { midiPlayer } from '../../audio/player';

FontAwesome.library.add(faPlay);
FontAwesome.library.add(faPause);
FontAwesome.library.add(faStepForward);
FontAwesome.library.add(faStepBackward);

export default class Controls extends Component {
  handleClick = event => {
    if (event.currentTarget) {
      midiPlayer.play();
      midiPlayer.on('playing', currentTick => {
        console.log(currentTick);
      });
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
