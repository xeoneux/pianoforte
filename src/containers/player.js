import { Container } from 'unstated';

export default class PlayerContainer extends Container {
  state = {
    currentMeasure: 0,
    currentTempo: 0,
    currentTick: 0,
    currentTime: 0,
    division: 0,
    isPlayerRunning: false,
    markerPercentage: 0,
    measures: 1,
    totalTicks: 0,
    totalTime: 0
  };
}

export const playerContainer = new PlayerContainer();
