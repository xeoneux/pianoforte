const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const keyboardTypes = {
  $49: { startKey: 36, endKey: 84 },
  $54: { startKey: 36, endKey: 89 },
  $61: { startKey: 36, endKey: 96 },
  $76: { startKey: 28, endKey: 103 },
  $88: { startKey: 21, endKey: 108 }
};

export const generateKeys = keyboardType => {
  const keys = [];
  const blackKeys = [];
  const whiteKeys = [];

  for (let i = keyboardType.startKey; i <= keyboardType.endKey; i++) {
    const note = i;
    const name = notes[i % notes.length];
    const type = name.includes('#') ? 'black' : 'white';
    const position = type === 'black' ? blackKeys.length : whiteKeys.length;

    const key = { note, name, type, position };

    keys.push(key);
    type === 'black' ? blackKeys.push(key) : whiteKeys.push(key);
  }

  return keys;
};
