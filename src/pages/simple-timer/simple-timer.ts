import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StopWatchService } from './stopwatch.service';

@Component({
  selector: 'page-simple-timer',
  templateUrl: 'simple-timer.html',
  providers: [StopWatchService]
})
export class SimpleTimerPage {

  timerStarted: boolean;
  startStopText: string;

  showResetButton: boolean;

  private timer;

  totalTime: string;
  totalTimeAtLaps: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private stopWatchService: StopWatchService) {
    this.resetTimer();
  }

  displayTime() {
    this.totalTime =  this.stopWatchService.updateTime();
  }

  startStopClicked(event) {
    this.timerStarted = !this.timerStarted;

    if (this.timerStarted) {
      this.startTimer();
    }
    else {
      this.stopTimer();
    }
  }

  private startTimer() {
    this.startStopText = 'Pause';
    this.timer = setInterval(() => {
      this.displayTime();
    }, 1000);
    this.showResetButton = false;
  }

  private stopTimer() {
    this.startStopText = 'Resume';
    clearTimeout(this.timer);
    this.showResetButton = true;
  }

  resetClicked(event) {
    this.resetTimer();
  }

  private resetTimer() {
    this.timerStarted = false;
    this.startStopText = 'Start';
    this.showResetButton = false;

    this.totalTime = this.stopWatchService.reset();
    this.totalTimeAtLaps = [];
  }

  lapClicked(event) {
    this.addLap();
  }

  private addLap() {
    this.totalTimeAtLaps.unshift(this.totalTime);
  }

//scroll laps
}
