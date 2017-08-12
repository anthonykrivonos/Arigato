import { Injectable } from '@angular/core';

@Injectable()
export class Parser {
      constructor() {}

      formatNumber(number:string):string {
            if (number == null) return null;
            else if (number.indexOf('+1') == 0) number = number.substring(2);
            else if (number.indexOf('1') == 0) number = number.substring(1);
            var number2 = (""+number).replace(/\D/g, '');
            var m = number2.match(/^(\d{3})(\d{3})(\d{4})$/);
            return (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3];
      }

      unFormatNumber(number:string):string {
            var number2 = (""+number).replace(/\D/g, '');
            var m = number2.match(/^(\d{3})(\d{3})(\d{4})$/);
            return (!m) ? null : m[1] + m[2] + m[3];
      }
}
