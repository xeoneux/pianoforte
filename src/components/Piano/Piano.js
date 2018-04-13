// @flow

import { Div } from 'glamorous';
import React, { PureComponent, Fragment } from 'react';
import { Subscribe } from 'unstated';

import PianoKey from './components/PianoKey';
import PianoContainer from '../../containers/piano';
import KeyboardContainer from '../../containers/keyboard';

export default class Piano extends PureComponent<{}> {
  render() {
    return (
      <Div display="flex">
        <Subscribe to={[KeyboardContainer, PianoContainer]}>
          {(keyboard, piano) => (
            <Fragment>
              {keyboard.state.keys.map((value, index) => (
                <PianoKey
                  value={value}
                  index={index}
                  piano={piano}
                  key={value.note}
                  active={piano.state[value.note]}
                  keyWidth={keyboard.state.keyWidth}
                />
              ))}
            </Fragment>
          )}
        </Subscribe>
      </Div>
    );
  }
}
