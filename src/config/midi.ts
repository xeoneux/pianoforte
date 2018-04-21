// @flow

import instruments from '../resources/instruments';

type Event = [{ noteNumber: ?number }];

export const getInstrumentName = (channel: number) => {
  if (channel === 0) return instruments[1];
  let instrumentFound;
  Object.keys(instruments).forEach(instrument => {
    if (instruments[instrument] === channel) instrumentFound = instrument;
  });
  return instrumentFound;
};

export const getKeyRange = (events: Event[]) => {
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

  if (low && high) {
    const range = high - low;
    return { low, high, range };
  } else return { low: 0, high: 0, range: 0 };
};
