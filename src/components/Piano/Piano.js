import { Div } from 'glamorous';
import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import Key from './components/Key';
import PianoContainer from '../../containers/piano';
import KeyboardContainer from '../../containers/keyboard';

export default class Piano extends Component {
  render() {
    return (
      <Subscribe to={[PianoContainer, KeyboardContainer]}>
        {(piano, keyboard) => (
          <Div display="flex">
            {keyboard.state.keys.map((value, index) => (
              <Key
                {...value}
                index={index}
                store={piano}
                key={value.note}
                keyWidth={keyboard.state.keyWidth}
                active={piano.state.keyboard[index].active}
              />
            ))}
          </Div>
        )}
      </Subscribe>
    );
  }
}
