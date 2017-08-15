import { Component, Injectable } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

import { Vibration } from '../classes/vibration';

@Injectable()
@Component({
  providers: [ActionSheetController, Vibration]
})
export class Action {
      constructor(private actionSheetCtrl:ActionSheetController, public vibration:Vibration) {}

      editableCardAction(contact:any, del:any = null, edit:any = null, add:any = null, call:any = null, text:any = null, email:any = null):void {
            var buttons = [
                  {
                        text: 'Delete',
                        role: 'destructive',
                        handler: () => {
                              console.log('Delete clicked');
                              if (del) del(contact.id);
                        }
                  },
                  {
                        text: 'Edit',
                        handler: () => {
                              console.log('Edit clicked');
                              if (edit) edit();
                        }
                  },
                  {
                        text: 'Add to Contacts',
                        handler: () => {
                              console.log('Add to Contacts clicked');
                              if (add) add(contact);
                        }
                  },
                  {
                        text: 'Close',
                        role: 'cancel',
                        handler: () => {
                              console.log('Close clicked');
                        }
                  }
            ];
            if (contact.email) {
                  buttons.splice(2, 0, {
                        text: `Email ${contact.email}`,
                        handler: () => {
                              console.log('Email clicked');
                              if (email) email(contact.email);
                        }
                  });
            }
            if (contact.phone) {
                  buttons.splice(2, 0, {
                        text: `Call ${contact.phone}`,
                        handler: () => {
                              console.log('Call clicked');
                              if (call) call(contact.phone);
                        }
                  }, {
                        text: `Text ${contact.phone}`,
                        handler: () => {
                              console.log('Text clicked');
                              if (text) text(contact.phone);
                        }
                  });
            }
            let actionSheet = this.actionSheetCtrl.create({
                  title: `${contact.first_name}${contact.last_name ? ' ' + contact.last_name : ''}`,
                  buttons
            });
            actionSheet.present();
            this.vibration.vibrationShort();
      }
}
