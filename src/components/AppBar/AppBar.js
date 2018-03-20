import React, { Component } from 'react';
import { Div } from 'glamorous';

import Controls from './Controls';
import Progress from './Progress';

import { headerHeight } from '../../config/app';

export default class AppBar extends Component {
  render() {
    return (
      <Div width="100%" height="100%" display="flex" flexDirection="column">
        <Controls />
        <Div display="flex" height={`${headerHeight / 2}vh`}>
          <Progress />
        </Div>
      </Div>
    );
  }
}
