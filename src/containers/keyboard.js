// @flow

import { Container } from 'unstated';

import { pianoContainer } from './piano';
import { generateKeyboard, keyboardTypes } from '../tools/keyboard';

import type { Key, KeyboardType } from '../tools/keyboard';

type KeyboardState = {
  keys: Key[],
  blacks: Key[],
  whites: Key[],
  keyWidth: number,
  type: KeyboardType
};

const keyboardState = (type): KeyboardState => {
  const keyboard = generateKeyboard(type);
  pianoContainer.setupState(keyboard.keys);
  return {
    type,
    keys: keyboard.keys,
    blacks: keyboard.blackKeys,
    whites: keyboard.whiteKeys,
    keyWidth: 100 / keyboard.whiteKeys.length
  };
};

export default class KeyboardContainer extends Container<KeyboardState> {
  state: KeyboardState = keyboardState(keyboardTypes.$88);
}

export const keyboardContainer = new KeyboardContainer();
