import { Note } from 'midiate/build/main/tools/Notes';
import instruments from '../resources/instruments.json';

export const getInstrumentName = (channel: number) => {
  if (channel === 0) {
    return instruments[1];
  }

  let instrumentFound;
  Object.keys(instruments).forEach(instrument => {
    if (instruments[instrument] === channel) {
      instrumentFound = instrument;
    }
  });
  return instrumentFound;
};

export const getKeyRange = (notes: Note[][]) => {
  let low: number;
  let high: number;
  notes.forEach(track => {
    track.forEach(note => {
      if (!low) {
        low = note.value;
      }
      if (!high) {
        high = note.value;
      }
      if (note.value < low) {
        low = note.value;
      }
      if (note.value > high) {
        high = note.value;
      }
    });
  });

  const range = high! - low!;
  return { low: low!, high: high!, range };
};
