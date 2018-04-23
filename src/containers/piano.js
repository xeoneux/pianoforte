import { Container } from 'unstated';

import { IKey } from '../tools/keyboard';

export default class PianoContainer extends Container {
  state = {};

  setupState(keys) {
    const pianoKeys = {};
    keys.forEach(key => (pianoKeys[key.note] = false));
    this.setState(pianoKeys);
  }

  toggle(note, active) {
    const obj = {};
    obj[note] = active;
    this.setState(obj);
  }
}

export const pianoContainer = new PianoContainer();
