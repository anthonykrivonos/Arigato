import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { Speech } from '../classes/speech';
import { Token } from '../classes/token';
import { Toast } from '../classes/toast';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
      rootPage:any = HomePage;

      constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, public speech:Speech, public token:Token, public toast:Toast) {
            platform.ready().then(() => {
                  statusBar.styleDefault();
                  splashScreen.hide();
                  speech.requestPermission();
                  this.updateToken(() => {
                        this.toast.showToast("Parser token created!");
                  }, () => {
                        this.toast.showToast("Couldn't create a parser token.");
                  });
                  console.log("app:Fully loaded.");
            }).catch();
      }

      updateToken(success:any = null, failure:any = null):void {
            this.token.getToken((token) => {
                  if (this.token.isOutdated(token)) {
                        this.token.getUUID((uuid) => {
                              this.token.auth(uuid, (newToken) => {
                                    this.token.storeToken(newToken, () => {
                                          if (success) success(newToken);
                                    }, () => {
                                          if (failure) failure();
                                    });
                              }, () => {
                                    if (failure) failure();
                              });
                        });
                  }
            }, () => {
                  this.token.getUUID((uuid) => {
                        this.token.auth(uuid, (token) => {
                              this.token.storeToken(token, () => {
                                    if (success) success(token);
                              }, () => {
                                    if (failure) failure();
                              });
                        }, () => {
                              if (failure) failure();
                        });
                  }, () => {
                        if (failure) failure();
                  });
            });
      }
}
