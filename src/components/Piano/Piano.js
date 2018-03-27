import { Div } from 'glamorous';
import React, { Component } from 'react';

import Key from './components/Key';

export default class Piano extends Component {
  get keyWidth() {
    return 100 / this.props.piano.state.whiteKeys.length;
  }

  render() {
    return (
      <Div display="flex">
        {this.props.piano.state.keyboard.map((value, index) => (
          <Key
            {...value}
            index={index}
            key={value.note}
            active={value.active}
            store={this.props.piano}
            keyWidth={this.keyWidth}
          />
        ))}
      </Div>
    );
  }
}
