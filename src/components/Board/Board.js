import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

import { contentHeight } from '../../config/app';
import { keyWidth } from '../../config/piano';

class Board extends Component {
  render() {
    return (
      <Background>
        {[...Array(6)].map((_, i) => <FatLine count={i + 1} />)}
        {[...Array(7)].map((_, i) => <ThinLine count={i} />)}
      </Background>
    );
  }
}

const Background = Glamorous.div({
  width: '100%',
  height: '100%',
  backgroundColor: '#303030'
});

const FatLine = props => (
  <Div
    left={`calc(${props.count * 7 * keyWidth}vh - 1px)`}
    height={`${contentHeight}vh`}
    position="absolute"
    borderLeft="2px solid #5A5A5A"
  />
);

const ThinLine = props => (
  <Div
    left={`${props.count * 7 * keyWidth + 3 * keyWidth}vh`}
    height={`${contentHeight}vh`}
    position="absolute"
    borderLeft="1px solid #5A5A5A"
  />
);

export default Board;
