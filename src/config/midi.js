import instruments from '../resources/instruments.json';

export const getInstrumentName = channel => {
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

export const getKeyRange = notes => {
  let low;
  let high;
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

  const range = high - low;
  return { low, high, range };
};
