import Glamorous, { Div } from 'glamorous';
import * as React from 'react';

import MidiContainer from '../../../containers/midi';
import PlayerContainer from '../../../containers/player';

interface IProgressProps {
  midi: MidiContainer;
  player: PlayerContainer;
}

export default class Progress extends React.Component<IProgressProps> {
  public render() {
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

interface IBlockProps extends IProgressProps {
  key: number;
  index: number;
}

const Block = (props: IBlockProps) => (
  // TODO: Performance check for component update
  <StyledBlock {...props} />
);

const StyledBlock = Glamorous.div(
  {
    backgroundColor: '#303030',
    border: '1px solid',
    borderRadius: '1px',
    boxShadow: 'inset 0 1px rgba(255, 255, 255, 0.4)',
    height: '100%',
    zIndex: 50
  },
  ({ midi, index, player }: IBlockProps) => {
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
      width: `${100 / midi.measures}vw`
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
  ({ type }: { type: string | null }) => ({
    right: type === 'total' ? '10px' : null,
    left: type === 'current' ? '10px' : null
  })
);
