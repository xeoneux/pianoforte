import { Container } from 'unstated';

import { generateKeyboard } from '../config/piano';

export default class PianoContainer extends Container {
  state = { keyboard: generateKeyboard({ startKey: 24, endKey: 107 }) };

  toggle(note, active) {
    this.setState({
      keyboard: this.state.keyboard.map(key => {
        if (key.note === note) return Object.assign({}, key, { active });
        return key;
      })
    });
  }
}

export const pianoContainer = new PianoContainer();
