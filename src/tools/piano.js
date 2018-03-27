const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const keyboardTypes = {
  49: { startKey: 36, endKey: 84 },
  54: { startKey: 36, endKey: 89 },
  61: { startKey: 36, endKey: 96 },
  76: { startKey: 28, endKey: 103 },
  88: { startKey: 21, endKey: 108 }
};

const generateKeyboard = ({ startKey = 0, endKey = 127 } = {}) => {
  const keys = [];
  const blackKeys = [];
  const whiteKeys = [];

  for (let i = startKey; i <= endKey; i++) {
    const name = notes[i % notes.length];
    const type = name.includes('#') ? 'black' : 'white';
    const position =
      type === 'black' ? blackKeys.push(type) - 1 : whiteKeys.push(type) - 1;

    keys.push({
      name,
      type,
      note: i,
      position
    });
  }

  return keys;
};

export { notes, keyboardTypes, generateKeyboard };
