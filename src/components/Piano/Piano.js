import glamorous from 'glamorous';
import React, { Component } from 'react';

const whites = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const blacks = ['C♯/D♭', 'D♯/E♭', 'F♯/G♭', 'G♯/A♭', 'A♯/B♭'];
const octave = [
  { type: 'white', name: whites[0], index: 0 },
  { type: 'black', name: blacks[0], index: 0 },
  { type: 'white', name: whites[1], index: 1 },
  { type: 'black', name: blacks[1], index: 1 },
  { type: 'white', name: whites[2], index: 2 },
  { type: 'white', name: whites[3], index: 3 },
  { type: 'black', name: blacks[2], index: 2 },
  { type: 'white', name: whites[4], index: 4 },
  { type: 'black', name: blacks[3], index: 3 },
  { type: 'white', name: whites[5], index: 5 },
  { type: 'black', name: blacks[4], index: 4 },
  { type: 'white', name: whites[6], index: 6 }
];

class Piano extends Component {
  render() {
    return (
      <div className="Piano">
        {octave.map(data => <Key key={data.name} {...data} />)}
      </div>
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
  ({ type = 'white', index }) => ({
    left:
      type === 'black'
        ? index * keyWidth + (keyWidth - keyWidth * crossWidthRatio / 2)
        : index * keyWidth,
    zIndex: type === 'black' ? 100 : 90,
    background: type === 'black' ? 'black' : 'white',
    height:
      type === 'black' ? `${keyHeight * crossHeightRatio}vh` : `${keyHeight}vh`,
    width:
      type === 'black' ? `${keyWidth * crossWidthRatio}vh` : `${keyWidth}vh`
  })
);

export default Piano;
