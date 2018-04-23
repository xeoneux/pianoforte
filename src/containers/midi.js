import { Container } from 'unstated';

export default class MidiContainer extends Container {
  state = {
    measures: 1
  };
}

export const midiContainer = new MidiContainer();
