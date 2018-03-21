import { Container } from 'unstated';

import { generateKeyboard } from '../config/piano';

const initialState = {};
generateKeyboard().forEach(note => {
  initialState[note.key] = { active: false };
});

export default class PianoContainer extends Container {
  state = initialState;

  activate(key) {
    const obj = {};
    obj[key] = { active: true };
    this.setState(obj);
  }

  deactivate(key) {
    const obj = {};
    obj[key] = { active: false };
    this.setState(obj);
  }
}
