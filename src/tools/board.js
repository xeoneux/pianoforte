import { FPS } from '../config/app';

export const ticksPerFrame = (bpm, division) => {
  const frameTime = 1000 / FPS;
  return bpm / 60 * (division * 4) / frameTime;
};
