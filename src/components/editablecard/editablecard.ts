import { Component, Input } from '@angular/core';

import { Camera } from '../../classes/camera';
import { Contacts } from '../../classes/contacts';
import { Global } from '../../classes/global';
import { Alert } from '../../classes/alert';
import { Toast } from '../../classes/toast';
import { Action } from '../../classes/action';
import { Send } from '../../classes/send';
import { Config } from '../../classes/config';

import { Observable } from 'rxjs';

@Component({
  selector: 'editablecard',
  providers: [Camera, Contacts, Global, Alert, Toast, Action, Send, Config],
  templateUrl: 'editablecard.html'
})
export class EditablecardComponent {
      editing:boolean = false;

      @Input('id') id:number;
      @Input('first_name') first_name:string;
      @Input('last_name') last_name:string;
      @Input('picture') picture:string;
      @Input('company') company:string;
      @Input('email') email:string;
      @Input('phone') phone:string;
      @Input('notes') notes:string;

      constructor(private camera:Camera, private contacts:Contacts, private global:Global, public alert:Alert, public toast:Toast, public action:Action, public send:Send, public config:Config) {
            this.global.editablecard('close', () => {
                  Observable.timer(500).take(1).subscribe(()=>this.editing = false);
            });
      }

      actionSheet():void {
            var contact = this.unparseContactObj();
            this.action.editableCardAction(contact, () => {
                  // Delete Option
                  this.delete();
            }, () => {
                  // Edit Option
                  this.toggleEdit();
            }, () => {
                  // Add to Contacts Option
                  this.config.get("saveAvatarsToAlbum", (saveAvatarsToAlbum) => {
                        if (!saveAvatarsToAlbum) contact.picture = null;
                        this.contacts.saveContact(contact, () => {
                              this.toast.showToast(`Saved ${contact.first_name} in contacts.`);
                              this.config.get("deleteContactOnAdd", (deleteContactOnAdd) => {
                                    if (deleteContactOnAdd) this.delete(false);
                              });
                        });
                  });
            }, () => {
                  // Call Option
                  this.send.call(contact, null, () => {
                        this.toast.showToast(`Could not call ${contact.first_name}.`);
                  });
            }, () => {
                  // Text Option
                  this.send.text(contact, null, () => {
                        this.toast.showToast(`Could not text ${contact.first_name}.`);
                  });
            }, () => {
                  // Email Option
                  this.send.email(contact, () => {
                        alert("Opened email " + contact.email);
                  }, (e) => {
                        this.toast.showToast(`Could not email ${contact.first_name}.`);
                        console.error(e ? "Could not send email: " + e : "Could not send email");
                  });
            });
      }

      toggleEdit():void {
            this.editing = !this.editing;
      }

      getPicture():void {
            this.camera.getPicture((picture) => {
                  this.picture = picture;
            });
      }

      save():void {
            if (this.id != null) {
                  var contactObj = this.contacts.createContact(this.id, this.first_name, this.last_name, this.company, this.phone, this.email, this.picture, this.notes);
                  this.contacts.storeContact(contactObj, null, null, () => {
                        this.global.storage('save');
                  });
            }
      }

      delete(alert:boolean = true):void {
            var name = this.first_name;
            if (alert) {
                  this.alert.showAlert(`Delete ${name}'s contact?`, 'This cannot be undone.', () => {
                        this.contacts.unStoreContact(this.id, () => {
                              this.global.storage('save');
                              this.toast.showToast(`Deleted ${name} from storage.`);
                        });
                  });
            } else {
                  this.contacts.unStoreContact(this.id, () => {
                        this.global.storage('save');
                  });
            }
      }

      unparseContactObj():any {
            return {
                  first_name: this.first_name,
                  last_name: this.last_name,
                  company: this.company,
                  phone: this.phone,
                  email: this.email,
                  picture: this.picture,
                  notes: this.notes
            };
      }
}
