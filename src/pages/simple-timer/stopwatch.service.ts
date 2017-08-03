import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class StopWatchService {

  counter: number;

  constructor() {
    this.reset()
  }

  updateTime(): string {
    return moment().hour(0).minute(0).second(this.counter++).format('HH : mm : ss');
  }

  reset(): string {
    this.counter = 0;
    return moment().hour(0).minute(0).second(0).format('HH : mm : ss');
  }
}
