import React from 'react';
import Glamorous, { Div } from 'glamorous';

export default class Progress extends React.Component {
  render() {
    return (
      <Div height="50%" display="flex">
        <Time type="current">{this.props.player.state.currentTime}</Time>
        {[...Array(this.props.midi.state.measures)].map((_, i) => (
          <Block
            key={i}
            index={i}
            midi={this.props.midi}
            player={this.props.player}
          />
        ))}
        <Time type="total">{this.props.player.state.totalTime}</Time>
      </Div>
    );
  }
}

const Block = props => (
  // TODO: Performance check for component update
  <StyledBlock {...props} />
);

const StyledBlock = Glamorous.div(
  {
    zIndex: 50,
    height: '100%',
    border: '1px solid',
    borderRadius: '1px',
    backgroundColor: '#303030',
    boxShadow: 'inset 0 1px rgba(255, 255, 255, 0.4)'
  },
  ({ midi, index, player }) => {
    let percentage = 0;
    if (player.state.currentMeasure > index) {
      percentage = 100;
    } else if (player.state.currentMeasure === index) {
      percentage = Math.floor(
        (player.state.currentTick -
          player.state.currentMeasure * (midi.state.division * 4)) /
          (midi.state.division * 4) *
          100
      );
    }

    return {
      backgroundImage: `linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0) 50%,
        rgba(0, 0, 0, 0.12) 51%,
        rgba(0, 0, 0, 0.04)
      ), linear-gradient(
        to right,
        rgba(0, 255, 0, 1),
        rgba(0, 255, 0, 1) ${percentage}%,
        rgba(0, 0, 0, 0) ${percentage}%,
        rgba(0, 0, 0, 0)
      )`,
      width: `${100 / player.totalMeasures}vw`
    };
  }
);

const Time = Glamorous.div(
  {
    bottom: 0,
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    height: '16px',
    lineHeight: '16px',
    opacity: 0.8,
    position: 'absolute',
    textAlign: 'center',
    width: '16px',
    zIndex: 100
  },
  ({ type }) => ({
    right: type === 'total' ? '10px' : null,
    left: type === 'current' ? '10px' : null
  })
);
