import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

export default class Progress extends Component {
  render() {
    return (
      <Div height="50%" display="flex">
        <Time type="current">{this.props.state.currentTime}</Time>
        {[...Array(this.props.state.measures)].map((_, i) => (
          <Block key={i} measures={this.props.state.measures} />
        ))}
        <Time type="total">{this.props.state.totalTime}</Time>
      </Div>
    );
  }
}

const Block = Glamorous.div(
  {
    zIndex: 50,
    height: '100%',
    border: '1px solid',
    borderRadius: '1px',
    backgroundColor: '#303030',
    boxShadow: 'inset 0 1px rgba(255, 255, 255, 0.4)',
    backgroundImage: `linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.12) 51%,
      rgba(0, 0, 0, 0.04)
    )`
  },
  ({ measures }) => ({ width: `${100 / measures}vw` })
);

const Time = Glamorous.div(
  {
    bottom: 0,
    opacity: 0.8,
    width: '16px',
    height: '16px',
    color: 'white',
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    zIndex: 100
  },
  ({ type }) => ({
    right: type === 'total' ? '10px' : null,
    left: type === 'current' ? '10px' : null
  })
);
