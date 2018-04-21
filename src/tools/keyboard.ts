export type Black = 'C#' | 'D#' | 'F#' | 'G#' | 'A#';
export type White = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';

export type NoteName = Black | White;
export type NoteType = 'black' | 'white';

export interface IKeyboardType {
  startKey: number;
  endKey: number;
}

export interface IKey {
  note: number;
  name: NoteName;
  type: NoteType;
  position: number;
}

export const notes: NoteName[] = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B'
];

export const keyboardTypes = {
  $49: { startKey: 36, endKey: 84 },
  $54: { startKey: 36, endKey: 89 },
  $61: { startKey: 36, endKey: 96 },
  $76: { startKey: 28, endKey: 103 },
  $88: { startKey: 21, endKey: 108 }
};

export const generateKeyboard = ({
  startKey = 0,
  endKey = 127
}: IKeyboardType) => {
  const keys: IKey[] = [];
  const blackKeys: IKey[] = [];
  const whiteKeys: IKey[] = [];

  for (let i = startKey; i <= endKey; i++) {
    const note = i;
    const name = notes[i % notes.length];
    const type: NoteType = name.includes('#') ? 'black' : 'white';
    const position = type === 'black' ? blackKeys.length : whiteKeys.length;

    const key = { note, name, type, position };

    keys.push(key);
    type === 'black' ? blackKeys.push(key) : whiteKeys.push(key);
  }

  return { keys, blackKeys, whiteKeys };
};
