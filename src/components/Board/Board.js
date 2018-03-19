import Glamorous from 'glamorous';
import React, { Component } from 'react';

import { contentHeight } from '../../config/app';
import { keyWidth } from '../../config/piano';

class Board extends Component {
  state = { markerPercentage: 25 };

  render() {
    return (
      <Background>
        {[...Array(7)].map((_, i) => <Line key={i} count={i + 1} />)}
        {[...Array(8)].map((_, i) => <Line key={i} type="thin" count={i} />)}
        <Marker type="odd" percentage={this.state.markerPercentage} />
        <Marker type="even" percentage={this.state.markerPercentage} />
      </Background>
    );
  }
}

const Background = Glamorous.div({
  width: '100%',
  height: '100%',
  backgroundColor: '#303030'
});

const Line = Glamorous.div(
  { position: 'absolute', height: `${contentHeight}vh` },
  ({ type, count }) => ({
    left:
      type === 'thin'
        ? `${count * 7 * keyWidth + 3 * keyWidth}vh`
        : `calc(${count * 7 * keyWidth}vh - 1px)`,
    borderLeft: type === 'thin' ? '1px solid #5A5A5A' : '2px solid #5A5A5A'
  })
);

const Marker = Glamorous.div(
  { position: 'relative', borderTop: '1px solid #5A5A5A' },
  ({ type, percentage }) => ({
    top: type === 'even' ? `${percentage}%` : `${percentage + 66}%`
  })
);

export default Board;
