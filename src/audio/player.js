import MidiPlayer from 'midi-player-js';
import SoundFontPlayer from 'soundfont-player';

import { appContainer } from '../containers/app';
import { pianoContainer } from '../containers/piano';

let piano;

const AudioContext = window.AudioContext || window.webkitAudioContext;

SoundFontPlayer.instrument(new AudioContext(), 'acoustic_grand_piano').then(
  marimba => {
    piano = marimba;
    window.navigator.requestMIDIAccess().then(midiAccess => {
      midiAccess.inputs.forEach(midiInput => {
        piano.listenToMidi(midiInput);
      });
    });
  }
);

export const midiPlayer = new MidiPlayer.Player(event => {
  if (event.name === 'Note on') {
    piano.play(event.noteNumber);
    pianoContainer.toggle(event.noteNumber, true);
  }
  if (event.name === 'Note off') {
    // piano.stop(event.noteNumber);
    pianoContainer.toggle(event.noteNumber, false);
  }
  appContainer.setState({
    currentTime: midiPlayer.getSongTimeRemaining()
  });
});
