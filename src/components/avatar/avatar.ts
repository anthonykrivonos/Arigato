import { Component, Input } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: 'avatar.html'
})
export class AvatarComponent {
      @Input('src') src:string;
      @Input('size') size:string;

      constructor() {}
}
