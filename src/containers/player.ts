import { Container } from 'unstated';

interface IPlayerState {
  currentMeasure: number;
  currentTempo: number;
  currentTick: number;
  currentTime: number;
  division: number;
  isPlayerRunning: boolean;
  markerPercentage: number;
  measures: number;
  totalTicks: number;
  totalTime: number;
}

export default class PlayerContainer extends Container<IPlayerState> {
  public state: IPlayerState = {
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
