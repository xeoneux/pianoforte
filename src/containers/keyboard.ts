import { Container } from 'unstated';

import { generateKeyboard, keyboardTypes } from '../tools/keyboard';
import { pianoContainer } from './piano';

import { IKey, IKeyboardType } from '../tools/keyboard';

interface IKeyboardState {
  keys: IKey[];
  blacks: IKey[];
  whites: IKey[];
  keyWidth: number;
  type: IKeyboardType;
}

const keyboardState = (type: IKeyboardType) => {
  const keyboard = generateKeyboard(type);
  pianoContainer.setupState(keyboard.keys);
  return {
    blacks: keyboard.blackKeys,
    keyWidth: 100 / keyboard.whiteKeys.length,
    keys: keyboard.keys,
    type,
    whites: keyboard.whiteKeys
  };
};

export default class KeyboardContainer extends Container<IKeyboardState> {
  public state = keyboardState(keyboardTypes.$88);
}

export const keyboardContainer = new KeyboardContainer();
