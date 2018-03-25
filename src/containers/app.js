import { Container } from 'unstated';

export default class AppContainer extends Container {
  state = {
    measures: 1,
    totalTime: 0,
    totalTicks: 0,
    currentTime: 0,
    currentTick: 0,
    markerPercentage: 0
  };
}

export const appContainer = new AppContainer();
