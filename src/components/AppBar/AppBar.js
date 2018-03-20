import React, { Component } from 'react';
import { Div } from 'glamorous';

import Controls from './Controls';
import Progress from './Progress';

export default class AppBar extends Component {
  render() {
    return (
      <Div width="100%" height="100%" display="flex" flexDirection="column">
        <Controls />
        <Progress />
      </Div>
    );
  }
}
