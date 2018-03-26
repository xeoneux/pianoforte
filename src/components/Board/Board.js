import Glamorous from 'glamorous';
import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import Marker from './components/Marker';
import AppContainer from '../../containers/app';

import { contentHeight } from '../../config/app';
import { keyWidth } from '../../config/piano';

class Board extends Component {
  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {app => (
          <Background>
            {[...Array(7)].map((_, i) => <Line key={i} count={i + 1} />)}
            {[...Array(8)].map((_, i) => (
              <Line key={i} type="thin" count={i} />
            ))}
            <Marker />
          </Background>
        )}
      </Subscribe>
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

export default Board;
