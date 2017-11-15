import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {StopwatchPage} from "../pages/stopwatch/stopwatch";

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import {TimerPage} from "../pages/timer/timer";

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyACyIPWBH7gOCR6yB1N7Vi_fiLWy23lLg4",
  authDomain: "climbingtrainer-b0668.firebaseapp.com",
  databaseURL: "https://climbingtrainer-b0668.firebaseio.com",
  storageBucket: "climbingtrainer-b0668.appspot.com",
  messagingSenderId: "986263805809"
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    StopwatchPage,
    TimerPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    StopwatchPage,
    TimerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

export class AppModule {}
