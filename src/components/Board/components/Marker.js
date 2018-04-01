import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

import { crossWidthRatio } from '../../../config/piano';

export default class Marker extends Component {
  state = { currentBar: 0, markerPercentage: 25 };

  render() {
    return (
      <Div width="100%" height="100%" position="absolute">
        {this.props.midi.state.notesMap ? (
          <StyledRain percentage={this.props.player.state.markerPercentage}>
            {this.props.midi.state.notesMap.map((track, index) => {
              const currentMeasure = this.props.player.state.currentMeasure;
              const measureData = track[currentMeasure];
              return Object.keys(measureData).map(keyNote =>
                measureData[keyNote].map((ins, idx) => (
                  <StyledDrop
                    isWhite={
                      !!this.props.keyboard.state.whites.find(
                        key => key.note === keyNote
                      )
                    }
                    stop={ins.to}
                    start={ins.from}
                    keyNote={keyNote}
                    key={keyNote + idx}
                    division={this.props.midi.state.division}
                    keyWidth={this.props.keyboard.state.keyWidth}
                  />
                ))
              );
            })}
          </StyledRain>
        ) : null}
        <StyledMarker
          type="odd"
          percentage={this.props.player.state.markerPercentage}
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

const StyledDrop = Glamorous.div(
  {
    zIndex: 150,
    position: 'absolute',
    backgroundColor: 'green'
  },
  ({ stop, start, division, isWhite, keyNote, keyWidth }) => ({
    height: stop
      ? `${(stop - start) / (division * 4) * 100}%`
      : `${(division * 4 - start) / (division * 4) * 100}%`,
    width:
      isWhite === true ? `${keyWidth}vw` : `${keyWidth * crossWidthRatio}vw`,
    left:
      isWhite === true ? `${keyNote * keyWidth}vw` : `${keyNote * keyWidth}vw`
  })
);

const StyledRain = Glamorous.div(
  {
    width: '100vw',
    height: '280px',
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
