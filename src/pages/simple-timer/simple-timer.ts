import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

/*
  Generated class for the SimpleTimer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-simple-timer',
  templateUrl: 'simple-timer.html'
})
export class SimpleTimerPage {

  timerStarted: boolean;
  startStopText: string;

  showResetButton: boolean;

  private timer;

  totalTimeCounter: number;
  totalTime: string;
  totalTimeAtLaps: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resetTimer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleTimerPage');
  }

  displayTime() {
    this.totalTime =  moment().hour(0).minute(0).second(this.totalTimeCounter++).format('HH : mm : ss');
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

  private resetTimer() {
    this.timerStarted = false;
    this.startStopText = 'Start';
    this.showResetButton = false;

    this.totalTimeCounter = 0;
    this.totalTime = moment().hour(0).minute(0).second(0).format('HH : mm : ss');
    this.totalTimeAtLaps = [];
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

  lapClicked(event) {
    this.totalTimeAtLaps.unshift(this.totalTime);
  }

  //scroll laps
}
