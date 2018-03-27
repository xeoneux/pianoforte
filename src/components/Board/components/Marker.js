import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import AppContainer from '../../../containers/app';

export default class Marker extends Component {
  state = { currentBar: 0, markerPercentage: 25 };

  render() {
    return (
      <Subscribe to={[AppContainer]}>
        {app => (
          <Div width="100%" height="100%" position="absolute">
            <StyledRain percentage={app.state.markerPercentage}>
              Let It Rain
            </StyledRain>
            <StyledMarker type="odd" percentage={app.state.markerPercentage}>
              <StyledBar>{this.state.currentBar}</StyledBar>
            </StyledMarker>
            {/* <StyledMarker type="even" percentage={app.state.markerPercentage}>
              <StyledBar>{this.state.currentBar + 1}</StyledBar>
            </StyledMarker> */}
          </Div>
        )}
      </Subscribe>
    );
  }
}

const StyledRain = Glamorous.div(
  {
    backgroundColor: 'red',
    height: '280px',
    width: '100vw',
    position: 'absolute'
  },
  ({ percentage }) => ({
    top: `${percentage}%`
  })
);

const StyledMarker = Glamorous.div(
  { position: 'relative', borderTop: '1px solid #5A5A5A' },
  ({ type, percentage }) => ({
    top: type === 'even' ? `${percentage}%` : `${percentage + 66}%`
  })
);

const StyledBar = Glamorous.div({
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
