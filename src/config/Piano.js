/*
MIDI Standard for Note Numbers

Oct	C	C#	D	D#	E	F	F#	G	G#	A	A#	B
-1	0	1	2	3	4	5	6	7	8	9	10	11
0	12	13	14	15	16	17	18	19	20	21	22	23
1	24	25	26	27	28	29	30	31	32	33	34	35
2	36	37	38	39	40	41	42	43	44	45	46	47
3	48	49	50	51	52	53	54	55	56	57	58	59
4	60*	61	62	63	64	65	66	67	68	69!	70	71
5	72	73	74	75	76	77	78	79	80	81	82	83
6	84	85	86	87	88	89	90	91	92	93	94	95
7	96	97	98	99	100	101	102	103	104	105	106	107
8	108	109	110	111	112	113	114	115	116	117	118	119
9	120	121	122	123	124	125	126	127
*/

import { footerHeight } from './app';
import notes from '../midi/notes';

export const keyHeight = footerHeight;
export const crossWidthRatio = 2 / 3;
export const crossHeightRatio = 2 / 3;
export const keyWidth = keyHeight / 6;

export const whites = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const blacks = ['C♯|D♭', 'D♯|E♭', 'F♯|G♭', 'G♯|A♭', 'A♯|B♭'];

export const generateKeyboard = ({ startKey = 0, endKey = 127 } = {}) => {
  const keys = [];
  for (let i = startKey; i <= endKey; i++) {
    keys.push({
      note: i,
      name: notes[i].name === 'C' ? `C${notes[i].octave}` : null,
      type: notes[i].type,
      position: notes[i - startKey].position
    });
  }
  return keys;
};
