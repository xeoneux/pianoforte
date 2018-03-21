import { Div } from 'glamorous';
import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import Key from './components/Key';

import { generateKeyboard } from '../../config/piano';
import PianoContainer from '../../containers/Piano';

export default class Piano extends Component {
  state = { keyboard: generateKeyboard({ startKey: 24, endKey: 107 }) };

  render() {
    return (
      <Subscribe to={[PianoContainer]}>
        {piano => (
          <Div display="flex">
            {this.state.keyboard.map((value, index) => (
              <Key
                {...value}
                index={index}
                store={piano}
                key={value.key}
                value={value.key}
              />
            ))}
          </Div>
        )}
      </Subscribe>
    );
  }
}
