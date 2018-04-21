import { Container } from 'unstated';

export interface IMidiContainerState {
  measures: number;
}

export default class MidiContainer extends Container<IMidiContainerState> {
  public state = {
    measures: 1
  };
}

export const midiContainer = new MidiContainer();
