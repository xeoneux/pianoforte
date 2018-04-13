// @flow

import { Container } from 'unstated';

type PlayerState = {
  measures: number,
  division: number,
  totalTime: number,
  totalTicks: number,
  currentTime: number,
  currentTick: number,
  currentTempo: number,
  currentMeasure: number,
  markerPercentage: number,
  isPlayerRunning: boolean
};

export default class PlayerContainer extends Container<PlayerState> {
  state: PlayerState = {
    measures: 1,
    division: 0,
    totalTime: 0,
    totalTicks: 0,
    currentTime: 0,
    currentTick: 0,
    currentTempo: 0,
    currentMeasure: 0,
    markerPercentage: 0,
    isPlayerRunning: false
  };
}

export const playerContainer = new PlayerContainer();
