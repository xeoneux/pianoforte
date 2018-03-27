import { Container } from 'unstated';

import { generateKeyboard, keyboardTypes } from '../tools/keyboard';

const keyboard = generateKeyboard(keyboardTypes.$88);

export default class PianoContainer extends Container {
  state = {
    keyboard: keyboard.keys,
    blackKeys: keyboard.blackKeys,
    whiteKeys: keyboard.whiteKeys
  };

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
