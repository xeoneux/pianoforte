import { Container } from 'unstated';

export default class MidiContainer extends Container {
  state = {
    notes: [],
    division: 0,
    measures: []
  };
}

export const midiContainer = new MidiContainer();
