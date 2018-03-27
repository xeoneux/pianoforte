import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

export default class Marker extends Component {
  state = { currentBar: 0, markerPercentage: 25 };

  render() {
    return (
      <Div width="100%" height="100%" position="absolute">
        <StyledRain percentage={this.props.app.state.markerPercentage}>
          Let It Rain
        </StyledRain>
        <StyledMarker
          type="odd"
          percentage={this.props.app.state.markerPercentage}
        >
          <StyledBar>{this.state.currentBar}</StyledBar>
        </StyledMarker>
        {/* <StyledMarker type="even" percentage={app.state.markerPercentage}>
              <StyledBar>{this.state.currentBar + 1}</StyledBar>
            </StyledMarker> */}
      </Div>
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
