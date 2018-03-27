export const midiNotesMap = player => {
  const division = player.division;
  const measure = division * 4;

  const data = [];
  const events = player.getEvents();
  const state = { start: 0, running: 1, end: 2 };

  events.forEach((trackData, trackIndex) => {
    data.push([]);

    trackData.forEach(event => {
      const currentMeasure = Math.floor(event.tick / (measure + 1));
      if (!data[trackIndex][currentMeasure])
        data[trackIndex][currentMeasure] = {};
      const selectedMeasure = data[trackIndex][currentMeasure];

      if (event.name === 'Note on' && event.velocity !== 0) {
        if (!selectedMeasure[event.noteNumber])
          selectedMeasure[event.noteNumber] = [];
        selectedMeasure[event.noteNumber].push([
          state.start,
          event.tick,
          event.velocity
        ]);
      }

      if (event.name === 'Note off' || event.velocity === 0) {
        if (!selectedMeasure[event.noteNumber])
          selectedMeasure[event.noteNumber] = [];
        selectedMeasure[event.noteNumber].push([state.end, event.tick]);
      }
    });
  });

  return data;
};
