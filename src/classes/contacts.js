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
import { Contacts as ContactsClass } from '@ionic-native/contacts';
import { NativeStorage } from '@ionic-native/native-storage';
var Contacts = (function () {
    function Contacts(contacts, nativeStorage) {
        this.contacts = contacts;
        this.nativeStorage = nativeStorage;
    }
    Contacts.prototype.storeContact = function (contact, success, failure) {
        var _this = this;
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.getItem('contacts').then(function (contacts) {
            contacts.push(contact);
            _this.storeContacts(contacts, success, failure);
        });
    };
    Contacts.prototype.storeContacts = function (contacts, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.setItem('contacts', contacts).then(function (ct) {
            console.log("Set contacts list: " + JSON.stringify(ct));
            if (success) {
                success(ct);
            }
        }).catch(function (e) {
            console.log("Could not set contacts list: " + JSON.stringify(e));
            if (failure) {
                failure(e);
            }
        });
    };
    Contacts.prototype.getContacts = function (success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.getItem('contacts').then(function (contacts) {
            if (success) {
                success(contacts);
            }
        }).catch(function (e) {
            if (failure) {
                failure(e);
            }
        });
    };
    Contacts.prototype.unStoreContacts = function (success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.remove('contacts').then(function (contacts) {
            if (success) {
                success(contacts);
            }
        }).catch(function (e) {
            if (failure) {
                failure(e);
            }
        });
    };
    Contacts.prototype.createContact = function (id, first_name, last_name, middle_initial, company, phone, email, picture, notes) {
        return {
            id: id,
            first_name: first_name,
            last_name: last_name,
            middle_initial: middle_initial,
            company: company,
            phone: phone,
            email: email,
            picture: picture,
            notes: notes
        };
    };
    return Contacts;
}());
Contacts = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ContactsClass, NativeStorage])
], Contacts);
export { Contacts };
//# sourceMappingURL=contacts.js.map