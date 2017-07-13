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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.startStopText = 'Start';
    this.timerStarted = false;

    this.time = moment().format('LLLL')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleTimerPage');
  }

  startStopClicked(event) {
    this.timerStarted = !this.timerStarted;
    this.startStopText = this.timerStarted ? 'Stop' : 'Start';
  }
}
