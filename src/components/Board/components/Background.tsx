import Glamorous, { Div } from 'glamorous';
import * as React from 'react';

import { contentHeight } from '../../../config/app';
import KeyboardContainer from '../../../containers/keyboard';

interface IBackgroundProps {
  keyboard: KeyboardContainer;
}

export default class Background extends React.Component<IBackgroundProps> {
  public getLines(type: 'pre' | 'post') {
    const whites = this.props.keyboard.state.whites;
    return type === 'pre'
      ? whites.filter(key => key.name === 'C').length
      : whites.filter(key => key.name === 'F').length;
  }

  public getInitCPos() {
    const initialC = this.props.keyboard.state.keys.find(
      key => key.name === 'C'
    );
    return initialC ? initialC.position : 0;
  }

  public render() {
    return (
      <Div
        width="100%"
        height="100%"
        position="absolute"
        backgroundColor="#303030"
      >
        {[...Array(this.getLines('pre'))].map((_, i) => (
          <Line
            key={i}
            count={i}
            keyWidth={this.props.keyboard.state.keyWidth}
            initialCPosition={this.getInitCPos()}
          />
        ))}
        {[...Array(this.getLines('post'))].map((_, i) => (
          <Line
            thin
            key={i}
            count={i}
            keyWidth={this.props.keyboard.state.keyWidth}
            initialCPosition={this.getInitCPos()}
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
