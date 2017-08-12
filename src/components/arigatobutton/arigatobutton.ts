import { Component } from '@angular/core';

/**
 * Generated class for the ArigatobuttonComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'arigatobutton',
  templateUrl: 'arigatobutton.html'
})
export class ArigatobuttonComponent {

  text: string;

  constructor() {
    console.log('Hello ArigatobuttonComponent Component');
    this.text = 'Hello World';
  }

}
