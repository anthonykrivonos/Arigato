import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, Platform, Slides } from 'ionic-angular';

import { Speech } from '../../classes/speech';
import { Global } from '../../classes/global';
import { Contacts } from '../../classes/contacts';
import { Parser } from '../../classes/parser';
import { Alert } from '../../classes/alert';
import { Token as TokenClass } from '../../classes/token';
import { Clipboard } from '../../classes/clipboard';
import { Toast } from '../../classes/toast';
import { Config } from '../../classes/config';

import { ArigatobuttonComponent } from '../../components/arigatobutton/arigatobutton';

import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  providers: [Speech, Global, Contacts, Parser, Alert, TokenClass, Clipboard, Toast, Config],
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
      @ViewChild(Slides) slides: Slides;

      MENU_SLIDE:number = 0;
      LIVE_SLIDE:number = 1;
      EDIT_SLIDE:number = 2;

      first_name:string;
      last_name:string;
      picture:string;
      company:string;
      email:string;
      phone:string;
      notes:string;
      token:string;
      text:string;

      default:boolean = true;
      isAndroid:boolean;
      logger:boolean = true;
      loading:boolean = false;

      stored:any;
      configuration:any;

      slide:number = 0;

      constructor(public navCtrl: NavController, private speech:Speech, private plt:Platform, private global:Global, private contacts:Contacts, public parser:Parser, public alert:Alert, public tokenClass:TokenClass, public clipboard:Clipboard, public toast:Toast, public config:Config) {
            this.global.logger('hide', () => {
                  this.hideLogger();
            });
            this.global.logger('show', () => {
                  this.showLogger();
            });
            this.global.storage('save', () => {
                  this.loadContacts();
            });
            this.global.livecard('delete', () => {
                  this.resetValues();
            });
            this.global.home('sort', (method) => {
                  this.sort(null, method);
            });
      }

      ngOnInit():void {
            this.resetValues();
            this.isAndroid = this.plt.is('ios') ? false : true;
            Observable.timer(1000).take(1).subscribe(()=> {
                  this.loadContacts(false);
                  this.tokenClass.getToken((token) => {
                        this.token = token.token;
                        console.log(`Got token ${this.token}`);
                  }, () => {
                        console.error("Could not get token.");
                  });
                  this.config.load((config) => {
                        this.configuration = config;
                  });
            });
      }

      slideTo(slide:number) {
            this.global.slides('hide');
            this.slides.slideTo(slide, 250);
      }

      changeSlide():void {
            this.slide = this.slides.getActiveIndex();
            this.handleSlide();
      }

      handleSlide():void {
            switch (this.slide) {
                  case 0:
                        this.global.editablecard('close');
                        break;
                  case 1:
                        break;
                  default:
                        break;
            }
      }

      beginSpeech():void {
            if (this.default) {
                  this.default = !this.default;
                  this.resetValues();
            }
            this.loading = true;
            this.speech.listen((text) => {
                  this.text = text;
            });
      }

      endSpeech():void {
            this.loading = false;
            this.speech.stopListening(() => {
                  this.config.get("overwriteOnRecord", (overwriteOnRecord) => {
                        console.log("Started parse of text " + this.text);
                        var contactObj = this.parser.parse(this.text, this.token, this.unparseContactObj(), overwriteOnRecord);
                        console.log("Ended parse " + JSON.stringify(contactObj, null, 2));
                        this.parseContactObj(contactObj);
                  });
            });
      }

      parseContactObj(contactObj:any):void {
            this.first_name = contactObj.first_name;
            this.last_name = contactObj.last_name;
            this.picture = contactObj.picture;
            this.company = contactObj.company;
            this.email = contactObj.email;
            this.phone = contactObj.phone;
            this.notes = contactObj.note;
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

      showLogger():void {
            this.logger = true;
      }

      hideLogger():void {
            this.logger = false;
      }

      resetValues():void {
            this.default = true;
      }

      loadContacts(slide:boolean = true):void {
            this.contacts.getContacts((stored) => {
                  this.config.get("sortBy", (sortBy) => {
                        this.stored = this.sort(stored, sortBy);
                        this.slideTo(slide ? 1 : 0);
                  });
            });
      }

      deleteAll():void {
            this.alert.showAlert('Delete all contacts?', 'This cannot be undone.', () => {
                  this.contacts.unStoreContacts(()=>{
                        this.stored = [];
                  });
            });
      }

      copyToken():void {
            this.clipboard.copy(this.token, () => {
                  this.toast.showToast('Token copied to clipboard!');
            }, () => {
                  this.toast.showToast('Token not copied to clipboard!');
            });
      }

      saveConfig():void {
            this.config.save(this.configuration);
      }

      sort(arr:any = null, method:any) {
            if (arr == null) arr = this.stored ? this.stored : [];
            var sortProperty;
            switch (method) {
                  case "firstName":
                        sortProperty = "first_name";
                        break;
                  case "lastName":
                        sortProperty = "last_name";
                        break;
                  case "phoneNumber":
                        sortProperty = "phone";
                        break;
                  case "emailAddress":
                        sortProperty = "email";
                        break;
                  default:
                        sortProperty = "id";
            }
            return arr.sort((a,b) => {
                  if (a[sortProperty] < b[sortProperty]) return -1;
                  else if (a[sortProperty] > b[sortProperty]) return 1;
                  return 0;
            });
      }
}
