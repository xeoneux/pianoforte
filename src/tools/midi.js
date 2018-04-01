export const midiNotesMap = player => {
  const division = player.division;
  const measure = division * 4;

  const data = [];
  const events = player.getEvents();
  const state = { complete: 0, running: 1 };

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

        selectedMeasure[event.noteNumber].push({
          from: event.tick,
          state: state.running,
          velocity: event.velocity
        });
      }

      if (event.name === 'Note off' || event.velocity === 0) {
        if (!selectedMeasure[event.noteNumber])
          selectedMeasure[event.noteNumber] = [];

        if (selectedMeasure[event.noteNumber].length) {
          const runningNote = selectedMeasure[event.noteNumber].find(
            note => note.state === state.running
          );
          if (runningNote) {
            runningNote.to = event.tick;
            runningNote.state = state.complete;
          }
        } else {
          selectedMeasure[event.noteNumber].push({
            to: event.tick,
            state: state.complete,
            velocity: event.velocity
          });
        }
      }
    });
  });

  return data;
};
