import MidiPlayer from 'midi-player-js';

const Player = new MidiPlayer.Player(event => {
  console.log(event);
});

export default Player;
