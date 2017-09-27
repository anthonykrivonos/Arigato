import { Component, Input } from '@angular/core';

import { Camera } from '../../classes/camera';
import { Contacts } from '../../classes/contacts';
import { Global } from '../../classes/global';
import { Toast } from '../../classes/toast';
import { Alert } from '../../classes/alert';
import { Config } from '../../classes/config';

@Component({
  selector: 'livecard',
  providers: [Camera, Contacts, Global, Toast, Alert, Config],
  templateUrl: 'livecard.html'
})
export class LivecardComponent {
      @Input('first_name') first_name:string;
      @Input('last_name') last_name:string;
      @Input('picture') picture:string;
      @Input('company') company:string;
      @Input('email') email:string;
      @Input('phone') phone:string;
      @Input('notes') notes:string;

      constructor(private camera:Camera, private contacts:Contacts, private global:Global, public toast:Toast, public alert:Alert, public config:Config) {}

      getPicture():void {
            this.camera.getPicture((picture) => {
                  this.picture = picture;
            });
      }

      save():void {
            if (this.validate((errorText) => {
                  this.toast.showToast(errorText, 'top', 4000);
            })) {
                  this.toast.showToast(`Saved ${this.first_name} in storage.`);
                  var contactObj = this.contacts.createContact(null, this.first_name, this.last_name, this.company, this.phone, this.email, this.picture, this.notes);
                  this.contacts.storeContact(contactObj, () => {
                        this.global.storage('save');
                        this.config.get("clearContactOnSave", (clearContactOnSave) => {
                              if (clearContactOnSave) this.clear(false);
                        });
                  });
            }
      }

      validate(callback:any = null):boolean {
            var errors = [], valid = true, errorText;
            if (this.first_name == null) {
                  errors.push('first name');
                  valid = false;
            };
            if (this.phone == null && this.email == null) {
                  errors.push('phone or email');
                  valid = false;
            }
            if (errors.length > 0) {
                  errorText = 'Cannot create new contact. User must have a ';
                  errors.forEach((er, i) => {
                        if (i == 0) errorText += er;
                        else if (i < errors.length - 1 && errors.length != 2) errorText += ', ' + er ;
                        else errorText += ' and ' + er + '.';
                  });
            }
            if (errorText && callback) callback(errorText);
            return valid;
      }

      resetValues():void {
            this.first_name = null;
            this.last_name = null;
            this.picture = null;
            this.company = null;
            this.email = null;
            this.phone = null;
            this.notes = null;
      }

      clear(alert:boolean = true):void {
            if (alert) {
                  this.alert.showAlert(`Clear contact?`, 'This will reset all contact info.', () => {
                        this.resetValues();
                        this.global.livecard('clear');
                  });
            } else {
                  this.resetValues();
                  this.global.livecard('clear');
            }
      }
}
