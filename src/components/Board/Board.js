import Glamorous from 'glamorous';
import React, { Component } from 'react';

class Board extends Component {
  render() {
    return <Background />;
  }
}

const Background = Glamorous.div({
  width: '100%',
  height: '100%',
  backgroundColor: 'dimgray'
});

export default Board;
