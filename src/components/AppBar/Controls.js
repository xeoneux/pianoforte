import FontAwesome from '@fortawesome/fontawesome';
import { Div } from 'glamorous';
import React, { Component } from 'react';

import faPlay from '@fortawesome/fontawesome-free-solid/faPlay';
import faPause from '@fortawesome/fontawesome-free-solid/faPause';
import faStepForward from '@fortawesome/fontawesome-free-solid/faStepForward';
import faStepBackward from '@fortawesome/fontawesome-free-solid/faStepBackward';

FontAwesome.library.add(faPlay);
FontAwesome.library.add(faPause);
FontAwesome.library.add(faStepForward);
FontAwesome.library.add(faStepBackward);

export default class Controls extends Component {
  render() {
    return (
      <Div height="50%" display="flex" justifyContent="space-around">
        <i className="fas fa-play" />
        <i className="fas fa-pause" />
        <i className="fas fa-step-forward" />
        <i className="fas fa-step-backward" />
      </Div>
    );
  }
}

const Buttons = [];
