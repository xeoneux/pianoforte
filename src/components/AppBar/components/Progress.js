import React, { Component } from 'react';
import Glamorous, { Div } from 'glamorous';
import { Subscribe } from 'unstated';

import AppContainer from '../../../containers/app';

const measures = 40;

export default class Progress extends Component {
  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {app => (
          <Div height="50%" display="flex">
            <Time type="current">{app.state.currentTime}</Time>
            {[...Array(measures)].map((_, i) => <Block key={i} />)}
            <Time type="total">{app.state.totalTime}</Time>
          </Div>
        )}
      </Subscribe>
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
