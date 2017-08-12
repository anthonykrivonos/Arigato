import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { Speech } from '../../classes/speech';

import { ArigatobuttonComponent } from '../../components/arigatobutton/arigatobutton';

@Component({
  selector: 'page-home',
  providers: [Speech],
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

      first_name:string;
      last_name:string;
      picture:string;
      company:string;
      email:string;
      phone:string;
      notes:string;

      default:boolean;
      isAndroid:boolean;
      loading:boolean = false;

      text:string;

      constructor(public navCtrl: NavController, private speech:Speech, private plt:Platform) {

      }

      ngOnInit():void {
            this.resetValues();
            this.isAndroid = this.plt.is('ios') ? false : true;
      }

      beginSpeech():void {
            this.loading = true;
            this.speech.listen((text) => this.text = text);
      }

      endSpeech():void {
            this.loading = false;
            this.speech.stopListening();
      }

      resetValues():void {
            this.default = false;
            this.first_name = "First";
            this.last_name = "Last";
            this.picture = "";
            this.company = "Arigato, Inc.";
            this.email = "me@arigato.com";
            this.phone = "(000)000-0000";
            this.notes = "Tap record to create a contact.";
      }

      nullValues():void {
            this.default = true;
            this.first_name = null;
            this.last_name = null;
            this.picture = null;
            this.company = null;
            this.email = null;
            this.phone = null;
            this.notes = null;
      }
}
