// @flow

import { Div } from 'glamorous';
import * as React from 'react';
import { Subscribe } from 'unstated';

import KeyboardContainer from '../../containers/keyboard';
import PianoContainer from '../../containers/piano';
import PianoKey from './components/PianoKey';

export default class Piano extends React.PureComponent {
  render() {
    return (
      <Div display="flex">
        <Subscribe to={[KeyboardContainer, PianoContainer]}>
          {(keyboard, piano) => (
            <React.Fragment>
              {keyboard.state.keys.map((value, index) => (
                <PianoKey
                  value={value}
                  index={index}
                  piano={piano}
                  key={value.note}
                  keyboard={keyboard}
                  state={piano.state[value.note]}
                />
              ))}
            </React.Fragment>
          )}
        </Subscribe>
      </Div>
    );
  }
}
