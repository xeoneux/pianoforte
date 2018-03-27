import { Div } from 'glamorous';
import React, { Component, Fragment } from 'react';
import { Subscribe } from 'unstated';

import Controls from './components/Controls';
import Progress from './components/Progress';
import AppContainer from '../../containers/app';
import MidiContainer from '../../containers/midi';

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
        <Subscribe to={[AppContainer]}>
          {app => (
            <Fragment>
              <Controls {...app} />
              <Subscribe to={[MidiContainer]}>
                {midi => <Progress app={app} midi={midi} />}
              </Subscribe>
            </Fragment>
          )}
        </Subscribe>
      </Div>
    );
  }
}
