import { Injectable } from '@angular/core';

import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';

@Injectable()
export class Send {
      constructor(private callNumber: CallNumber, private sms:SMS, private emailComposer: EmailComposer) { }

      call(contact:any, success:any = null, failure:any = null):void {
            this.callNumber.callNumber(contact.phone, true)
                  .then(() => {if (success) success();})
                  .catch(() => {if (failure) failure();});
      }

      text(contact:any, success:any = null, failure:any = null):void {
            this.sms.send(contact.phone, '')
                  .then(() => {if (success) success();})
                  .catch(() => {if (failure) failure();});
      }

      email(contact:any, success:any = null, failure:any = null):void {
            this.emailComposer.isAvailable().then((available) =>{
                  console.log("Checking availability");
                  if(available) {
                        console.log("Email is available");
                        this.emailComposer.hasPermission()
                              .then(() => {
                                    console.log("User has permission");
                                    let email = {
                                          to: contact.email,
                                          subject: '',
                                          body: ``,
                                          isHtml: true
                                    };
                                    this.emailComposer.open(email)
                                          .then(() => {if (success) success()})
                                          .catch(() => {if (failure) failure()});
                              })
                              .catch(() => {if (failure) failure();});
                  } else {if (failure) failure();}
            }).catch(() => {if (failure) failure();});
      }
}
