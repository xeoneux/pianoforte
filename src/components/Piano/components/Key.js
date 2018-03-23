import React, { PureComponent } from 'react';
import Glamorous from 'glamorous';

import {
  keyWidth,
  keyHeight,
  crossWidthRatio,
  crossHeightRatio
} from '../../../config/piano';

export default class Key extends PureComponent {
  handleMouseUp = () => {
    this.props.store.toggle(this.props.note, false);
  };

  handleMouseDown = () => {
    this.props.store.toggle(this.props.note, true);
  };

  render() {
    return (
      <StyledKey
        {...this.props}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseUp}
        onMouseDown={this.handleMouseDown}
      >
        <StyledName>{this.props.name}</StyledName>
      </StyledKey>
    );
  }
}

const StyledKey = Glamorous.div(
  {
    cursor: 'pointer',
    position: 'absolute',
    boxSizing: 'border-box',
    border: '1px solid gray',
    transition: 'all .1s ease',
    borderRadius: '0 0 5px 5px',
    transformOrigin: 'top center',
    transform: 'translate(0, 0) rotateX(0)',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)'
  },
  ({ type, index, active, position }) => ({
    left:
      type === 'white'
        ? `${position * keyWidth}vh`
        : `${(index - position - 1) * keyWidth +
            (keyWidth - keyWidth * crossWidthRatio / 2)}vh`,
    zIndex: type === 'white' ? 90 : 100,
    background:
      active === true
        ? type === 'white' ? 'black' : 'white'
        : type === 'white' ? 'white' : 'black',
    transform: active === true ? 'rotateX(-1deg) scale(0.95)' : null,
    width:
      type === 'white' ? `${keyWidth}vh` : `${keyWidth * crossWidthRatio}vh`,
    height:
      type === 'white' ? `${keyHeight}vh` : `${keyHeight * crossHeightRatio}vh`
  })
);

const StyledName = Glamorous.div({
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
