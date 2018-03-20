import React, { Component } from 'react';
import Glamorous, { Div } from 'glamorous';

const measures = 40;

export default class Progress extends Component {
  render() {
    return (
      <Div height="50%" display="flex">
        {[...Array(measures)].map((_, i) => <Block key={i} />)}
      </Div>
    );
  }
}

const Block = Glamorous.div({
  zIndex: 50,
  height: '100%',
  border: '1px solid',
  borderRadius: '1px',
  backgroundColor: '#303030',
  width: `${100 / measures}vw`,
  boxShadow: 'inset 0 1px rgba(255, 255, 255, 0.4)',
  backgroundImage: `linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.12) 51%,
      rgba(0, 0, 0, 0.04)
    )`
});
