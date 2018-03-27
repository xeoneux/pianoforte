import { Container } from 'unstated';

import { midiNotesMap } from '../tools/midi';

export default class MidiContainer extends Container {
  state = {
    measures: 1
  };
}

export const midiContainer = new MidiContainer();
