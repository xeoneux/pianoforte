import MidiPlayer from 'midi-player-js';
import SoundFontPlayer from 'soundfont-player';

SoundFontPlayer.instrument(new AudioContext(), 'marimba').then(marimba => {
  marimba.play('C4');
});

const midiPlayer = new MidiPlayer.Player(event => {
  console.log(event);
});

export default midiPlayer;
