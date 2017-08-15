var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import * as nlp from 'compromise';
import { parser as human } from 'humanparser';
var Parser = (function () {
    function Parser() {
    }
    Parser.prototype.parse = function (text, contact) {
        if (contact === void 0) { contact = null; }
        console.log("parser:Starting parse: " + text);
        contact = contact || {};
        text = text.replace(/-/g, '') || null;
        console.log("parser:Removed dashes: " + text);
        var phoneNumber = this.getPhoneNumber(text);
        text = this.rebuildTextWithout(phoneNumber, text);
        console.log("parser:Got phone number: " + phoneNumber);
        var emailAddress = this.getEmail(text);
        text = this.rebuildTextWithout(emailAddress, text);
        console.log("parser:Got email address: " + emailAddress);
        var fullNameObj = this.getName(text);
        text = this.rebuildTextWithout(fullNameObj, text);
        console.log("parser:Got full name: " + JSON.stringify(fullNameObj));
        var companyName = this.getCompany(text);
        text = this.rebuildTextWithout(companyName, text);
        console.log("parser:Got company name: " + companyName);
        console.log((text.length === 0) ? 'Notes empty' : text);
        var parsedContact = {
            first_name: contact.first_name || fullNameObj ? fullNameObj.firstName : null,
            last_name: contact.last_name || fullNameObj ? fullNameObj.lastName : null,
            picture: contact.picture || null,
            company: contact.company || companyName || null,
            email: contact.email || emailAddress || null,
            phone: contact.phone || this.formatNumber(phoneNumber) || null,
            notes: contact.notes || text || null
        };
        return parsedContact;
    };
    Parser.prototype.getPhoneNumber = function (text) {
        try {
            var numbers = text.match(/\d+/g);
            if (numbers == null)
                return null;
            for (var i = 0; i < numbers.length; i++) {
                if (numbers[i].length === 10) {
                    return numbers[i];
                }
            }
        }
        catch (e) { }
        ;
        return null;
    };
    Parser.prototype.getEmail = function (text) {
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
        }
        catch (e) { }
        ;
        return null;
    };
    Parser.prototype.getName = function (text) {
        try {
            var name = nlp(text).people().out('text');
            return name != null && name != "" ? human.parseName(name) : null;
        }
        catch (e) { }
        ;
        return null;
    };
    Parser.prototype.getCompany = function (text) {
        try {
            var company = nlp(text).topics().data();
            return company[0].text;
        }
        catch (e) { }
        ;
        return null;
    };
    Parser.prototype.rebuildTextWithout = function (toRemove, text) {
        if (toRemove === null)
            return text;
        var wordsToRemove = [];
        if (typeof toRemove === 'object') {
            Object.keys(toRemove).forEach(function (key) {
                wordsToRemove.push(toRemove[key]);
            });
        }
        else {
            wordsToRemove = toRemove.split(' ');
        }
        for (var i = 0; i < wordsToRemove.length; i++) {
            text = text.replace(wordsToRemove[i], '');
        }
        return text.trim();
    };
    Parser.prototype.formatNumber = function (number) {
        if (number == null)
            return null;
        else if (number.indexOf('+1') == 0)
            number = number.substring(2);
        else if (number.indexOf('1') == 0)
            number = number.substring(1);
        var number2 = ("" + number).replace(/\D/g, '');
        var m = number2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3];
    };
    Parser.prototype.unFormatNumber = function (number) {
        var number2 = ("" + number).replace(/\D/g, '');
        var m = number2.match(/^(\d{3})(\d{3})(\d{4})$/);
        return (!m) ? null : m[1] + m[2] + m[3];
    };
    return Parser;
}());
Parser = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], Parser);
export { Parser };
//# sourceMappingURL=parser.js.map