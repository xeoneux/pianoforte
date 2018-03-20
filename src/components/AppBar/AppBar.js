import React, { Component } from 'react';
import { Div } from 'glamorous';

import Controls from './Controls';
import Progress from './Progress';

import { headerHeight } from '../../config/app';

export default class AppBar extends Component {
  render() {
    return (
      <Div display="flex" height="100%" width="100%">
        <Controls />
        <Div display="flex" height={`${headerHeight / 2}vh`}>
          <Progress />
        </Div>
      </Div>
    );
  }
}
