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

  startStopText: string;
  timerStarted: boolean;
  time: string;
  counter: number;
  private timer;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.startStopText = 'Start';
    this.timerStarted = false;

    this.counter = 0;
    this.time = moment().hour(0).minute(0).second(0).format('HH : mm : ss');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleTimerPage');
  }

  displayTime() {
    this.time =  moment().hour(0).minute(0).second(this.counter++).format('HH : mm : ss');
  }

  startStopClicked(event) {
    this.timerStarted = !this.timerStarted;

    if (this.timerStarted) {
      this.startStopText = 'Stop';
      this.timer = setInterval(() => {this.displayTime();}, 1000);
    }
    else {
      this.startStopText = 'Start';
      clearTimeout(this.timer)
    }
  }

  resetClicked(event) {
    this.counter = 0;
    this.time = moment().hour(0).minute(0).second(0).format('HH : mm : ss');
  }
}
