import Glamorous from 'glamorous';
import * as React from 'react';

import {
  keyHeight,
  crossWidthRatio,
  crossHeightRatio
} from '../../../config/keyboard';
import PianoContainer from '../../../containers/piano';
import { Key } from '../../../tools/keyboard';

interface IPianoKeyProps  {
  value: Key,
  index: number,
  active: boolean,
  keyWidth: number,
  piano: PianoContainer
};

export default class PianoKey extends PureComponent<PianoKeyProps> {
  handleMouseUp = () => {
    if (this.props.piano.state[this.props.value.note])
      this.props.piano.toggle(this.props.value.note, false);
  };

  handleMouseDown = () => {
    if (!this.props.piano.state[this.props.value.note])
      this.props.piano.toggle(this.props.value.note, true);
  };

  handleMouseLeave = () => {
    if (this.props.piano.state[this.props.value.note]) this.handleMouseUp();
  };

  render() {
    return (
      <StyledKey
        {...this.props}
        keyWidth={this.props.keyWidth}
        onMouseUp={this.handleMouseUp}
        onMouseDown={this.handleMouseDown}
        onMouseLeave={this.handleMouseLeave}
      >
        <StyledName>{this.props.value.name}</StyledName>
      </StyledKey>
    );
  }
}

const StyledKey = Glamorous.div(
  {
    cursor: 'pointer',
    position: 'absolute',
    boxSizing: 'border-box',
    border: '1px solid gray',
    transition: 'all .1s ease',
    borderRadius: '0 0 5px 5px',
    transformOrigin: 'top center',
    transform: 'translate(0, 0) rotateX(0)',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
  },
  ({ value, index, active, keyWidth }) => ({
    left:
      value.type === 'white'
        ? `${value.position * keyWidth}vw`
        : `${(index - value.position - 1) * keyWidth +
            (keyWidth - keyWidth * crossWidthRatio / 2)}vw`,
    zIndex: value.type === 'white' ? 90 : 100,
    background:
      active === true
        ? value.type === 'white'
          ? 'black'
          : 'white'
        : value.type === 'white'
          ? 'white'
          : 'black',
    transform: active === true ? 'rotateX(-1deg) scale(0.95)' : null,
    width:
      value.type === 'white'
        ? `${keyWidth}vw`
        : `${keyWidth * crossWidthRatio}vw`,
    height:
      value.type === 'white'
        ? `${keyHeight}vh`
        : `${keyHeight * crossHeightRatio}vh`
  })
);

const StyledName = Glamorous.div({
  left: 0,
  bottom: 0,
  opacity: 0.8,
  color: 'gray',
  width: '16px',
  height: '16px',
  fontSize: '10px',
  lineHeight: '16px',
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'absolute'
});
