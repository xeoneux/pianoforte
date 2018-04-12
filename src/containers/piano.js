// @flow

import { Container } from 'unstated';

import type { Key } from '../tools/keyboard';

export type PianoState = {
  [note: number]: boolean
};

export default class PianoContainer extends Container<PianoState> {
  state = {};

  setupState(keys: Key[]) {
    const pianoKeys = {};
    keys.forEach(key => (pianoKeys[key.note] = false));
    this.setState(...pianoKeys);
  }

  toggle(note: number, active: boolean) {
    const obj = {};
    obj[note] = active;
    this.setState(obj);
  }
}

export const pianoContainer = new PianoContainer();
