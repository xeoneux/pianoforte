import { Div } from 'glamorous';
import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import Key from './components/Key';
import PianoContainer from '../../containers/piano';

export default class Piano extends Component {
  render() {
    return (
      <Subscribe to={[PianoContainer]}>
        {piano => (
          <Div display="flex">
            {piano.state.keyboard.map((value, index) => (
              <Key
                {...value}
                index={index}
                store={piano}
                key={value.note}
                active={value.active}
              />
            ))}
          </Div>
        )}
      </Subscribe>
    );
  }
}
