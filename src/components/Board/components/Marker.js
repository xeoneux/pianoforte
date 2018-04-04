import Glamorous, { Div } from 'glamorous';
import React, { Component } from 'react';

import { contentHeight } from '../../../config/app';
import { crossWidthRatio } from '../../../config/piano';

export default class Marker extends Component {
  state = { currentBar: 0, markerPercentage: 25 };

  render() {
    return (
      <Div
        width="100%"
        height="100%"
        position="absolute"
        top={`${this.props.player.state.markerPercentage}%`}
      >
        {this.props.midi.state.notesMap ? (
          <StyledRain percentage={this.props.player.state.markerPercentage}>
            {this.props.midi.state.notesMap.map((track, index) => {
              const currentMeasure = this.props.player.state.currentMeasure;
              const measureData = track[currentMeasure];
              if (measureData)
                return Object.keys(measureData).map(keyNote =>
                  measureData[keyNote].map((ins, idx) => {
                    const keyData = this.props.keyboard.state.keys.find(
                      key => key.note === +keyNote
                    );
                    return (
                      <StyledDrop
                        stop={ins.to}
                        start={ins.from}
                        key={keyNote + idx}
                        type={keyData.type}
                        position={keyData.position}
                        division={this.props.midi.state.division}
                        keyWidth={this.props.keyboard.state.keyWidth}
                        index={this.props.keyboard.state.keys.findIndex(
                          key => key.note === +keyNote
                        )}
                      />
                    );
                  })
                );
              else return null;
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
    zIndex: 10,
    position: 'absolute'
  },
  ({ type, stop, start, index, division, position, keyWidth }) => ({
    backgroundColor: type === 'white' ? 'green' : 'darkgreen',
    height: stop
      ? `${(stop - start) / (division * 4) * 100}%`
      : `${(division * 4 - start) / (division * 4) * 100}%`,
    width:
      type === 'white' ? `${keyWidth}vw` : `${keyWidth * crossWidthRatio}vw`,
    bottom: `${start / (division * 4) * 100}%`,
    left:
      type === 'white'
        ? `${position * keyWidth}vw`
        : `${(index - position - 1) * keyWidth +
            (keyWidth - keyWidth * crossWidthRatio / 2)}vw`
  })
);

const StyledRain = Glamorous.div(
  {
    width: '100vw',
    position: 'absolute',
    height: `${contentHeight}vh`
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
