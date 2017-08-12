import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ArigatobuttonComponent } from '../../components/arigatobutton/arigatobutton';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

      first_name:string;
      last_name:string;
      middle_initial:string;
      picture:string;
      company:string;
      email:string;
      phone:string;
      notes:string;

      constructor(public navCtrl: NavController) {

      }

      ngOnInit():void {
            this.resetValues();
      }

      resetValues():void {
            this.first_name = "First";
            this.last_name = "Last";
            this.middle_initial = "M.";
            this.picture = "";
            this.company = "Arigato, Inc.";
            this.email = "me@arigato.com";
            this.phone = "(000)000-0000";
            this.notes = "Tap record to create a contact.";
      }
}
