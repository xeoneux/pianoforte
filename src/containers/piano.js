import { Container } from 'unstated';

export default class PianoContainer extends Container {
  state = {};

  setupState(keys) {
    const pianoKeys = {};
    keys.forEach(key => {
      pianoKeys[key.note] = {
        color: 'grey',
        active: false
      };
    });
    this.setState(pianoKeys);
  }

  toggle(note, color, active) {
    const obj = {};
    obj[note] = Object.assign({}, obj[note], {
      color,
      active
    });
    this.setState(obj);
  }
}

export const pianoContainer = new PianoContainer();
