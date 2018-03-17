import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

import {
  keyWidth,
  keyHeight,
  crossWidthRatio,
  crossHeightRatio,
  generateKeyboard
} from '../../config/Piano';

class Piano extends Component {
  render() {
    return (
      <Div>
        {generateKeyboard().map((value, index) => (
          <Key {...value} index={index} key={value.key}>
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
    border: '1px solid gray',
    borderRadius: '0 0 5px 5px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
  },
  ({ type, index, position }) => ({
    left:
      type === 'white'
        ? `${position * keyWidth}vh`
        : `${(index - position - 1) * keyWidth +
            (keyWidth - keyWidth * crossWidthRatio / 2)}vh`,
    zIndex: type === 'white' ? 90 : 100,
    background: type === 'white' ? 'white' : 'black',
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
