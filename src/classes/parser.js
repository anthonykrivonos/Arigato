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
import { Http, Headers, RequestOptions } from '@angular/http';
var Parser = (function () {
    function Parser(http) {
        this.http = http;
        this.PARSEGATO_PARSE = 'https://parsergato.herokuapp.com/parse';
    }
    Parser.prototype.parse = function (text, token, contact, overwrite) {
        var _this = this;
        if (contact === void 0) { contact = null; }
        if (overwrite === void 0) { overwrite = null; }
        var headers = new Headers({ 'Content-Type': 'application/json', 'x-access-token': token });
        var options = new RequestOptions({ headers: headers });
        this.http.post(this.PARSEGATO_PARSE, this.textToJSONString(text), options).map(function (res) { return res.json(); }).take(1).subscribe(function (res) {
            if (res.parsed_text) {
                return overwrite == true ? _this.overwriteContact(res.parsed_text, contact) : _this.updateContact(res.parsed_text, contact);
            }
            else {
                return contact;
            }
        });
    };
    Parser.prototype.textToJSONString = function (text) {
        return JSON.stringify({
            text: text
        });
    };
    Parser.prototype.overwriteContact = function (parsedContact, contact) {
        if (contact === void 0) { contact = null; }
        if (contact == null)
            return parsedContact;
        return {
            first_name: parsedContact.first_name || contact.first_name,
            last_name: parsedContact.last_name || contact.last_name,
            company: parsedContact.company || contact.company,
            email: parsedContact.email || contact.email,
            phone: parsedContact.phone || contact.phone,
            picture: contact.picture || null,
            notes: parsedContact.notes || contact.notes,
        };
    };
    Parser.prototype.updateContact = function (parsedContact, contact) {
        if (contact === void 0) { contact = null; }
        if (contact == null)
            return parsedContact;
        return {
            first_name: contact.first_name || parsedContact.first_name,
            last_name: contact.last_name || parsedContact.last_name,
            company: contact.company || parsedContact.company,
            email: contact.email || parsedContact.email,
            phone: contact.phone || parsedContact.phone,
            picture: contact.picture || null,
            notes: contact.notes || parsedContact.notes,
        };
    };
    return Parser;
}());
Parser = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], Parser);
export { Parser };
//# sourceMappingURL=parser.js.map