import { Div } from 'glamorous';
import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import Controls from './components/Controls';
import Progress from './components/Progress';
import AppContainer from '../../containers/app';

export default class AppBar extends Component {
  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {app => (
          <Div
            width="100%"
            height="100%"
            display="flex"
            position="relative"
            flexDirection="column"
          >
            <Controls {...app} />
            <Progress {...app} />
          </Div>
        )}
      </Subscribe>
    );
  }
}
