import instruments from '../midi/data/instruments';

export const getInstrumentName = channel => {
  if (channel === 0) return instruments[1];
  let instrumentFound;
  Object.keys(instruments).forEach(instrument => {
    if (instruments[instrument] === channel) instrumentFound = instrument;
  });
  return instrumentFound;
};
