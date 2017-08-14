import { Component, Input } from '@angular/core';

import { Camera } from '../../classes/camera';
import { Contacts } from '../../classes/contacts';
import { Global } from '../../classes/global';
import { Alert } from '../../classes/alert';
import { Toast } from '../../classes/toast';

import { Observable } from 'rxjs';

@Component({
  selector: 'editablecard',
  providers: [Camera, Contacts, Global, Alert, Toast],
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

      constructor(private camera:Camera, private contacts:Contacts, private global:Global, public alert:Alert, public toast:Toast) {
            this.global.editablecard('close', () => {
                  Observable.timer(500).take(1).subscribe(()=>this.editing = false);
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

      delete():void {
            var name = this.first_name;
            this.alert.showAlert(`Delete ${name}'s info?`, 'This cannot be undone.', () => {
                  this.contacts.unStoreContact(this.id, () => {
                        this.global.storage('save');
                        this.toast.showToast(`Deleted ${name} from storage.`);
                  });
            })
      }
}
