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

const octaves = [...Array(7)].map((_, idx) =>
  octave.map(key =>
    Object.assign({}, key, {
      name: key.name + idx,
      pos: key.pos + idx * 7
    })
  )
);

class Piano extends Component {
  render() {
    return (
      <Div>
        {[].concat(...octaves).map((val, idx) => (
          <Key {...val} idx={idx} key={val.name}>
            <Name>{val.name}</Name>
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
  ({ type, idx, pos }) => ({
    left:
      type === 'white'
        ? `${pos * keyWidth}vh`
        : `${(idx - pos - 1) * keyWidth +
            (keyWidth - keyWidth * crossWidthRatio / 2)}vh`,
    zIndex: type === 'white' ? 90 : 100,
    background: type === 'white' ? 'white' : 'black',
    width:
      type === 'white' ? `${keyWidth}vh` : `${keyWidth * crossWidthRatio}vh`,
    height:
      type === 'white' ? `${keyHeight}vh` : `${keyHeight * crossHeightRatio}vh`
  })
);

const Name = glamorous.div({
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
