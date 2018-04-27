import { Container } from 'unstated';

export default class PlayerContainer extends Container {
  state = {
    totalTime: 0,
    totalTicks: 0,
    totalMeasures: 0,

    currentTick: 0,
    currentTime: 0,
    currentMeasure: 0,

    currentTempo: 0,
    markerPercentage: 0,
    isPlayerRunning: false
  };
}

export const playerContainer = new PlayerContainer();
