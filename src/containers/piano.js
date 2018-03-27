import { Container } from 'unstated';

import { generateKeyboard, keyboardTypes } from '../tools/piano';

export default class PianoContainer extends Container {
  state = { keyboard: generateKeyboard(keyboardTypes['88']) };

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
