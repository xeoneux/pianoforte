import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

import {
  keyWidth,
  keyHeight,
  crossWidthRatio,
  crossHeightRatio,
  generateKeyboard
} from '../../config/piano';

class Piano extends Component {
  render() {
    return (
      <Div display="flex">
        {generateKeyboard({ startKey: 24, endKey: 114 }).map((value, index) => (
          <Key {...value} index={index} key={value.key} active={false}>
            <Name>{value.name}</Name>
          </Key>
        ))}
      </Div>
    );
  }
}

const Key = Glamorous.div(
  {
    cursor: 'pointer',
    position: 'absolute',
    boxSizing: 'border-box',
    border: '1px solid gray',
    transition: 'all .2s ease',
    borderRadius: '0 0 5px 5px',
    transformOrigin: 'top center',
    transform: 'translate(0, 0) rotateX(0)',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
  },
  ({ type, index, active, position }) => ({
    left:
      type === 'white'
        ? `${position * keyWidth}vh`
        : `${(index - position - 1) * keyWidth +
            (keyWidth - keyWidth * crossWidthRatio / 2)}vh`,
    zIndex: type === 'white' ? 90 : 100,
    background: type === 'white' ? 'white' : 'black',
    transform: active ? 'rotateX(-1deg) scale(0.95)' : null,
    width:
      type === 'white' ? `${keyWidth}vh` : `${keyWidth * crossWidthRatio}vh`,
    height:
      type === 'white' ? `${keyHeight}vh` : `${keyHeight * crossHeightRatio}vh`
  })
);

const Name = Glamorous.div({
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

export default Piano;
