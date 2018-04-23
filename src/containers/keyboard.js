import { Container } from 'unstated';

import {
  generateKeys,
  IKey,
  IKeyboardType,
  keyboardTypes
} from '../tools/keyboard';
import { pianoContainer } from './piano';

const setInitialState = () => {
  const type = keyboardTypes.$88;
  const keys = generateKeys(type);
  pianoContainer.setupState(keys);
  return { keys, type };
};

export default class KeyboardContainer extends Container {
  state = setInitialState();
}

export const keyboardContainer = new KeyboardContainer();
