import React, { Component } from 'react';
import { Div } from 'glamorous';

import Controls from './components/Controls';
import Progress from './components/Progress';

export default class AppBar extends Component {
  render() {
    return (
      <Div
        width="100%"
        height="100%"
        display="flex"
        position="relative"
        flexDirection="column"
      >
        <Controls />
        <Progress />
      </Div>
    );
  }
}
