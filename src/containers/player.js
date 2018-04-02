import { Container } from 'unstated';

export default class PlayerContainer extends Container {
  state = {
    division: 0,
    measures: 1,
    totalTime: 0,
    totalTicks: 0,
    currentTime: 0,
    currentTick: 0,
    currentMeasure: 0,
    markerPercentage: 0
  };

  setTimeUsing(player) {
    const ppq = player.division * 4;
    const currentMeasure = ~~(player.tick / ppq);

    this.setState({
      currentMeasure,
      currentTick: player.tick,
      markerPercentage: (player.tick % ppq) / ppq * 100,
      currentTime: ~~(player.getSongTime() - player.getSongTimeRemaining())
    });
  }
}

export const playerContainer = new PlayerContainer();
