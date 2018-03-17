import glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

const whites = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const blacks = ['C♯|D♭', 'D♯|E♭', 'F♯|G♭', 'G♯|A♭', 'A♯|B♭'];
const octave = [
  { type: 'white', name: whites[0], pos: 0 },
  { type: 'black', name: blacks[0], pos: 0 },
  { type: 'white', name: whites[1], pos: 1 },
  { type: 'black', name: blacks[1], pos: 1 },
  { type: 'white', name: whites[2], pos: 2 },
  { type: 'white', name: whites[3], pos: 3 },
  { type: 'black', name: blacks[2], pos: 2 },
  { type: 'white', name: whites[4], pos: 4 },
  { type: 'black', name: blacks[3], pos: 3 },
  { type: 'white', name: whites[5], pos: 5 },
  { type: 'black', name: blacks[4], pos: 4 },
  { type: 'white', name: whites[6], pos: 6 }
];

class Piano extends Component {
  render() {
    return (
      <Div>
        {octave.map((data, index) => (
          <Key {...data} idx={index} key={data.name}>
            <Name>{data.name}</Name>
          </Key>
        ))}
      </Div>
    );
  }
}

const keyHeight = 30;
const keyWidth = keyHeight / 4;
const crossHeightRatio = 0.75;
const crossWidthRatio = 0.66;

const Key = glamorous.div(
  {
    cursor: 'pointer',
    position: 'absolute',
    border: '1px solid gray',
    borderRadius: '0 0 5px 5px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
  },
  ({ type = 'white', idx, pos }) => ({
    left:
      type === 'black'
        ? `${(idx - pos - 1) * keyWidth +
            (keyWidth - keyWidth * crossWidthRatio / 2)}vh`
        : `${(idx - pos) * keyWidth}vh`,
    zIndex: type === 'black' ? 100 : 90,
    background: type === 'black' ? 'black' : 'white',
    height:
      type === 'black' ? `${keyHeight * crossHeightRatio}vh` : `${keyHeight}vh`,
    width:
      type === 'black' ? `${keyWidth * crossWidthRatio}vh` : `${keyWidth}vh`
  })
);

const Name = glamorous.div({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '16px',
  height: '16px',
  lineHeight: '16px',
  textAlign: 'center',
  color: 'gray',
  fontSize: '10px',
  fontWeight: 'bold',
  opacity: 0.8
});

export default Piano;
