import { Component } from '@angular/core';

/**
 * Generated class for the EditablecardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'editablecard',
  templateUrl: 'editablecard.html'
})
export class EditablecardComponent {

  text: string;

  constructor() {
    console.log('Hello EditablecardComponent Component');
    this.text = 'Hello World';
  }

}
