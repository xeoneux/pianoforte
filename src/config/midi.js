import instruments from '../midi/instruments';

export const getInstrumentName = channel => {
  if (channel === 0) return instruments[1];
  let instrumentFound;
  Object.keys(instruments).forEach(instrument => {
    if (instruments[instrument] === channel) instrumentFound = instrument;
  });
  return instrumentFound;
};

export const getKeyRange = events => {
  let low, high;
  events.forEach(track => {
    if (track.length > 1) {
      track.forEach(note => {
        if (note.noteNumber) {
          if (!low) low = note.noteNumber;
          if (!high) high = note.noteNumber;
          if (note.noteNumber < low) low = note.noteNumber;
          if (note.noteNumber > high) high = note.noteNumber;
        }
      });
    }
  });
  const range = high - low;
  return { low, high, range };
};
