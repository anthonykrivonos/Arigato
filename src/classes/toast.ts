import { Component, Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

import { Vibration } from '../classes/vibration';

@Injectable()
@Component({
  providers: [Vibration]
})
export class Toast {
      constructor(private toastCtrl:ToastController, public vibration:Vibration) {}

      showToast(message:string, position:string = 'top', duration:number = 2000) {
            let toast = this.toastCtrl.create({
                  cssClass: 'toast',
                  message: message,
                  duration: duration,
                  position: position,
                  showCloseButton: true
            });
            toast.present();
            this.vibration.vibrationResponsive();
            toast.onDidDismiss(() => {
                  console.log('Dismissed toast');
            });
      }
}
