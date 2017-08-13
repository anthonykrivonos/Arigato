import { Component, Input, OnInit } from '@angular/core';

import { Camera } from '../../classes/camera';
import { Contacts } from '../../classes/contacts';
import { Global } from '../../classes/global';

import { Observable } from 'rxjs';

@Component({
  selector: 'livecard',
  providers: [Camera, Contacts, Global],
  templateUrl: 'livecard.html'
})
export class LivecardComponent implements OnInit {
      editing:boolean = false;
      name:string;

      @Input('first_name') first_name:string;
      @Input('last_name') last_name:string;
      @Input('picture') picture:string;
      @Input('company') company:string;
      @Input('email') email:string;
      @Input('phone') phone:string;
      @Input('notes') notes:string;

      constructor(private camera:Camera, private contacts:Contacts, private global:Global) {}

      ngOnInit():void {
            this.name = `${this.first_name} ${this.last_name}`;
      }

      toggleEdit():void {
            this.parseName();
            this.global.logger(this.editing ? 'hide' : 'show');
            this.editing = !this.editing;
      }

      parseName():void {
            this.first_name = this.name.split(" ")[0] || "";
            this.last_name = this.name.split(" ")[1] || "";
      }

      getPicture():void {
            this.camera.getPicture((picture) => {
                  this.picture = picture;
            });
      }

      save():void {
            var contactObj = this.contacts.createContact(this.first_name, this.last_name, this.company, this.phone, this.email, this.picture, this.notes);
            this.contacts.storeContact(null, contactObj, () => {
                  this.global.storage('save');
            });
      }

      delete():void {
            this.global.livecard('delete');
      }
}
