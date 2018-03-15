import React, { Component } from 'react';

import './Piano.css';

const whites = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const blacks = ['C♯/D♭', 'D♯/E♭', 'F♯/G♭', 'G♯/A♭', 'A♯/B♭'];
const octave = [
  whites[0],
  blacks[0],
  whites[1],
  blacks[1],
  whites[2],
  whites[3],
  blacks[2],
  whites[4],
  blacks[3],
  whites[5],
  blacks[4],
  whites[6]
];

class Piano extends Component {
  render() {
    return (
      <div class="keyboard">
        <Key />
      </div>
    );
  }
}

const Key = props => <div class="Piano-key" />;

export default Piano;
