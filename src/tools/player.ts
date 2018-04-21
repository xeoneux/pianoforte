import { playerContainer } from '../containers/player';

const sampleRate = 40;

export let intervalId: NodeJS.Timer;

export const play = (tempo: number, division: number) => {
  const ticksToProcess = tempo * division / 60000 * sampleRate;

  intervalId = setInterval(() => {
    let currentTick;
    let currentMeasure;

    currentTick = playerContainer.state.currentTick + ticksToProcess;
    currentMeasure = playerContainer.state.currentMeasure;

    if (currentTick > division * playerContainer.state.currentMeasure + 1) {
      currentMeasure = playerContainer.state.currentMeasure + 1;
    }

    playerContainer.setState({
      currentMeasure,
      currentTick
    });
  }, sampleRate);
};

export const stop = () => {
  clearInterval(intervalId);
};
