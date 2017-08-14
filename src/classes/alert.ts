import { Component, Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { Vibration } from '../classes/vibration';

@Injectable()
@Component({
  providers: [AlertController, Vibration]
})
export class Alert {

      constructor(private alertCtrl:AlertController, public vibration:Vibration) {}

      showAlert(title:string, message:string, confirmed:any = null, cancelled:any = null, confirm:string = 'Confirm', cancel:string = 'Cancel'):void {
            let alert = this.alertCtrl.create({
                  title: title,
                  message: message,
                  buttons: [
                        {
                              text: cancel,
                              role: 'cancel',
                              handler: () => {
                                    if (cancelled) cancelled();
                                    console.log('Cancel clicked');
                              }
                        },
                        {
                              text: confirm,
                              handler: () => {
                                    if (confirmed) confirmed();
                                    console.log(confirm + ' clicked');
                              }
                        }
                  ]
            });
            alert.present();
            this.vibration.vibrationShort();
      }
}
