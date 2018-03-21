import MidiPlayer from 'midi-player-js';
import SoundFontPlayer from 'soundfont-player';

let piano;

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
  piano.play(event.noteName);
});
