// @flow

import { Container } from 'unstated';

import { pianoContainer } from './piano';
import { generateKeyboard, keyboardTypes } from '../tools/keyboard';

import type { Key, KeyboardType } from '../tools/keyboard';

const keyboardState = type => {
  const keyboard = generateKeyboard(type);
  pianoContainer.setupState(keyboard.keys);
  return {
    type,
    keys: keyboard.keys,
    blacks: keyboard.blackKeys,
    whites: keyboard.whiteKeys,
    keyWidth: 100 / keyboard.whiteKeys.length,
    preLines: keyboard.whiteKeys.filter(key => key.name === 'C').length,
    postLines: keyboard.whiteKeys.filter(key => key.name === 'F').length,
    initialCPosition: (() => {
      const initialC = keyboard.keys.find(key => key.name === 'C');
      if (initialC) return initialC.position;
      return 0;
    })()
  };
};

type KeyboardState = {
  blacks: Key[],
  whites: Key[],
  keyWidth: number,
  preLines: number,
  postLines: number,
  type: KeyboardType,
  initialCPosition: number
};

export default class KeyboardContainer extends Container<KeyboardState> {
  state = keyboardState(keyboardTypes.$88);
}

export const keyboardContainer = new KeyboardContainer();
