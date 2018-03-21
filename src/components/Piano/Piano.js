import { Div } from 'glamorous';
import React, { Component } from 'react';

import Key from './components/Key';

import { generateKeyboard } from '../../config/piano';

export default class Piano extends Component {
  state = { keyboard: generateKeyboard({ startKey: 24, endKey: 107 }) };

  render() {
    return (
      <Div display="flex">
        {this.state.keyboard.map((value, index) => (
          <Key {...value} index={index} key={value.note} />
        ))}
      </Div>
    );
  }
}
