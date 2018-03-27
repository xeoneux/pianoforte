import { Div } from 'glamorous';
import React, { Component } from 'react';

import Key from './components/Key';

export default class Piano extends Component {
  setKeyWidth() {
    const keyboard = this.props.piano.state.keyboard;
    const whiteKeys = keyboard.filter(key => key.type === 'white');
    this.setState({ keyWidth: 100 / whiteKeys.length });
  }

  componentWillMount() {
    this.setKeyWidth();
  }

  render() {
    return (
      <Div display="flex">
        {this.props.piano.state.keyboard.map((value, index) => (
          <Key
            {...value}
            index={index}
            store={this.props.piano}
            key={value.note}
            active={value.active}
            keyWidth={this.state.keyWidth}
          />
        ))}
      </Div>
    );
  }
}
