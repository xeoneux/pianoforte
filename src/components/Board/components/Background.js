import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

import { contentHeight } from '../../../config/app';

export default class Background extends Component {
  render() {
    return (
      <Div
        width="100%"
        height="100%"
        position="absolute"
        backgroundColor="#303030"
      >
        {[...Array(this.props.keyboard.state.preLines)].map((_, i) => (
          <Line
            key={i}
            count={i}
            keyWidth={this.props.keyboard.state.keyWidth}
            initialCPosition={this.props.keyboard.state.initialCPosition}
          />
        ))}
        {[...Array(this.props.keyboard.state.postLines)].map((_, i) => (
          <Line
            thin
            key={i}
            count={i}
            keyWidth={this.props.keyboard.state.keyWidth}
            initialCPosition={this.props.keyboard.state.initialCPosition}
          />
        ))}
      </Div>
    );
  }
}

const Line = Glamorous.div(
  { position: 'absolute', height: `${contentHeight}vh` },
  ({ thin, count, keyWidth, initialCPosition }) => ({
    left:
      thin === true
        ? `${initialCPosition * keyWidth +
            (count * 7 * keyWidth + 3 * keyWidth)}vw`
        : `calc(${initialCPosition * keyWidth + count * 7 * keyWidth}vw - 1px)`,
    borderLeft: thin === true ? '1px solid #5A5A5A' : '2px solid #5A5A5A'
  })
);
