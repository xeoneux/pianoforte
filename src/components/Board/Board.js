import React, { Component, Fragment } from 'react';
import { Subscribe } from 'unstated';

import Marker from './components/Marker';
import Background from './components/Background';
import AppContainer from '../../containers/app';
import KeyboardContainer from '../../containers/keyboard';

class Board extends Component {
  render() {
    return (
      <Fragment>
        <Subscribe to={[KeyboardContainer]}>
          {keyboard => <Background keyboard={keyboard} />}
        </Subscribe>
        <Subscribe to={[AppContainer]}>{app => <Marker app={app} />}</Subscribe>
      </Fragment>
    );
  }
}

export default Board;
