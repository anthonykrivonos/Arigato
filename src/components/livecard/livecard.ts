import { Component } from '@angular/core';

/**
 * Generated class for the LivecardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'livecard',
  templateUrl: 'livecard.html'
})
export class LivecardComponent {

  text: string;

  constructor() {
    console.log('Hello LivecardComponent Component');
    this.text = 'Hello World';
  }

}
