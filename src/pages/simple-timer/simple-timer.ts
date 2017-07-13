import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  timerStopped: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.startStopText = 'Start';
    this.timerStarted = false;
    this.timerStopped = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleTimerPage');
  }

  startStopClicked(event) {

    if (!this.timerStarted) {
      this.startStopText = 'Stop';
      // this.timerStarted = true;
    }

    if (this.timerStarted) {
      this.startStopText = 'Start';
    }

    this.timerStarted = !this.timerStarted;
  }
}
