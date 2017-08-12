import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { Speech } from '../classes/speech';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
      rootPage:any = HomePage;

      constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private speech:Speech) {
            platform.ready().then(() => {
                  statusBar.styleDefault();
                  splashScreen.hide();
                  speech.requestPermission(null, ()=>{
                        this.platform.exitApp();
                  });
            });
      }
}
