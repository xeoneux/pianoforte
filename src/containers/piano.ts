import { Container } from 'unstated';

import { IKey } from '../tools/keyboard';

export interface IPianoState {
  [note: number]: boolean;
}

export default class PianoContainer extends Container<IPianoState> {
  public state = {};

  public setupState(keys: IKey[]) {
    const pianoKeys = {};
    keys.forEach(key => (pianoKeys[key.note] = false));
    this.setState(pianoKeys);
  }

  public toggle(note: number, active: boolean) {
    const obj = {};
    obj[note] = active;
    this.setState(obj);
  }
}

export const pianoContainer = new PianoContainer();
