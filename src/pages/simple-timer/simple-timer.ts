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

  showLapButton: boolean;
  showResetButton: boolean;

  private timer;

  totalTimeCounter: number;
  totalTime: string;
  totalTimeAtLaps: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.startStopText = 'Start';
    this.timerStarted = false;
    this.showLapButton = false;
    this.showResetButton = false;
    this.totalTimeAtLaps = [];

    this.totalTimeCounter = 0;
    this.totalTime = moment().hour(0).minute(0).second(0).format('HH : mm : ss');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleTimerPage');
  }

  displayTime() {
    this.totalTime =  moment().hour(0).minute(0).second(this.totalTimeCounter++).format('HH : mm : ss');
  }

  startStopClicked(event) {
    this.timerStarted = !this.timerStarted;
    this.showLapButton = !this.showLapButton;

    if (this.timerStarted) {
      this.startStopText = 'Pause';
      this.timer = setInterval(() => {this.displayTime();}, 1000);
      this.showResetButton = false;
    }
    else {
      this.startStopText = 'Resume';
      clearTimeout(this.timer);
      this.showResetButton = true;
    }
  }

  resetClicked(event) {
    this.totalTimeCounter = 0;
    this.startStopText = 'Start';
    this.showResetButton = false;
    this.totalTime = moment().hour(0).minute(0).second(0).format('HH : mm : ss');
    this.totalTimeAtLaps = [];
  }

  lapClicked(event) {
    this.totalTimeAtLaps.unshift(this.totalTime);

    // this.counter = 0;
    // this.time = moment().hour(0).minute(0).second(0).format('HH : mm : ss');
  }

  // delete lap
  //lap total times
  //scroll laps
}
