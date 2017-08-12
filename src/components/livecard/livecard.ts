import { Component, Input, OnInit } from '@angular/core';

import { Camera } from '../../classes/camera';

@Component({
  selector: 'livecard',
  providers: [Camera],
  templateUrl: 'livecard.html'
})
export class LivecardComponent implements OnInit {
      editing:boolean = false;

      @Input('first_name') first_name:string;
      @Input('last_name') last_name:string;
      @Input('picture') picture:string;
      @Input('company') company:string;
      @Input('email') email:string;
      @Input('phone') phone:string;
      @Input('notes') notes:string;

      constructor(private camera:Camera) {
            console.log('Hello LivecardComponent Component');
      }

      ngOnInit():void {
      }

      toggleEdit():void {
            this.editing = !this.editing;
      }

      getPicture():void {
            this.camera.getPicture((picture) => {
                  this.picture = picture;
            });
      }
}
