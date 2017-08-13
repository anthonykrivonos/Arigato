import { Injectable } from '@angular/core';

import * as nlp from 'compromise';
import { parser as human } from 'humanparser';

@Injectable()
export class Parser {
      constructor() {}

      parse(text:string, contact:any = null):any {
            console.log("parser:Starting parse: " + text);

            contact = contact || {};

            text = text.replace(/-/g, '') || null;

            console.log("parser:Removed dashes: " + text);

            var phoneNumber = this.getPhoneNumber(text);
            text = text.replace(phoneNumber, '');

            console.log("parser:Got phone number: " + phoneNumber);

            var emailAddress = this.getEmail(text);
            text = text.replace(emailAddress, '');

            console.log("parser:Got email address: " + emailAddress);

            var fullNameObj = this.getName(text);
            text = text.replace(fullNameObj ? fullNameObj.fullName : '', '');

            console.log("parser:Got full name: " + JSON.stringify(fullNameObj));

            var companyName = this.getCompany(text);
            text = text.replace(companyName, '');

            console.log("parser:Got company name: " + companyName);

            console.log((text.length === 0) ? 'Notes empty' : text);

            var testContact = {
                  first_name: contact.first_name || fullNameObj ? fullNameObj.firstName : null,
                  last_name: contact.last_name || fullNameObj ? fullNameObj.lastName : null,
                  picture: contact.picture || null,
                  company: contact.company || companyName || null,
                  email: contact.email || emailAddress || null,
                  phone: contact.phone || this.formatNumber(phoneNumber) || null,
                  notes: contact.notes || text || null
            };

            return testContact;
      }

      getPhoneNumber(text:string):string {
            try {
                  var numbers = text.match(/\d+/g);

                  if (numbers == null) return null;

                  for (var i = 0; i < numbers.length; i++) {
                        if (numbers[i].length === 10) {
                              return numbers[i];
                        }
                  }
            } catch(e) {};
            return null;
      }

      getEmail(text:string):string {
            try {
                  if (!text.includes('@')) {
                        return null;
                  }
                  var textArr = text.split(' ');
                  var email = null;
                  for (var i = 0; i < textArr.length; i++) {
                        if (textArr[i].includes('@')) {
                              email = textArr[i];
                        }
                  }
                  return (email.includes('.')) ? email : null;
            } catch(e) {};
            return null;
      }

      getName(text:string):any {
            try {
                  var name = nlp(text).people().out('text');
                  return name != null && name != "" ? human.parseName(name) : null;
            } catch(e) {};
            return null;
      }

      getCompany(text:string):string {
            try {
                  var company = nlp(text).topics().data();
                  return company[0].text;
            } catch(e) {};
            return null;
      }

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
