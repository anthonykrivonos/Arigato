import { Component } from '@angular/core';

/**
 * Generated class for the ButtonComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'button',
  templateUrl: 'button.html'
})
export class ButtonComponent {

  text: string;

  constructor() {
    console.log('Hello ButtonComponent Component');
    this.text = 'Hello World';
  }

}
