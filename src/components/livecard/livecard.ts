import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'livecard',
  templateUrl: 'livecard.html'
})
export class LivecardComponent implements OnInit {
      editing:boolean = false;

      @Input('first_name') first_name:string;
      @Input('last_name') last_name:string;
      @Input('middle_initial') middle_initial:string;
      @Input('picture') picture:string;
      @Input('company') company:string;
      @Input('email') email:string;
      @Input('phone') phone:string;
      @Input('notes') notes:string;

      constructor() {
            console.log('Hello LivecardComponent Component');
      }

      ngOnInit():void {
      }
}
