import { Container } from 'unstated';

import { pianoContainer } from './piano';
import { generateKeys, keyboardTypes } from '../tools/keyboard';

export default class KeyboardContainer extends Container {
  state = (() => {
    const type = keyboardTypes.$88;
    const { keys, blackKeys, whiteKeys } = generateKeys(type);
    pianoContainer.setupState(keys);
    return { type, keys, blackKeys, whiteKeys };
  })();
}

export const keyboardContainer = new KeyboardContainer();
