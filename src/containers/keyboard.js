import { Container } from 'unstated';

import { generateKeyboard, keyboardTypes } from '../tools/keyboard';

const keyboardState = type => {
  const keyboard = generateKeyboard(type);
  return {
    type,
    keys: keyboard.keys,
    blacks: keyboard.blackKeys,
    whites: keyboard.whiteKeys,
    preLines: keyboard.whiteKeys.filter(key => key === 'F').length,
    postLines: keyboard.whiteKeys.filter(key => key === 'C').length
  };
};

export default class KeyboardContainer extends Container {
  state = keyboardState(keyboardTypes.$88);

  set keyboardType(type) {
    this.setState(...keyboardState(type));
  }
}

export const keyboardContainer = new KeyboardContainer();
