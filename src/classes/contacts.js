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
    Contacts.prototype.storeContact = function (contact, success, failure, idReturn) {
        var _this = this;
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        if (idReturn === void 0) { idReturn = null; }
        this.nativeStorage.getItem('contacts').then(function (contacts) {
            console.log("contacts:Got contacts list: " + JSON.stringify(contacts));
            console.log('contacts:Got id: ' + contact.id);
            if (contact.id == null) {
                var id = contacts ? contacts.length : 0;
                console.log('contacts:Creating new contact with id ' + id + '.');
                contact.id = id;
                contacts.push(contact);
            }
            else {
                console.log('contacts:Changing contact with id ' + contact.id + '.');
                for (var i = 0; i < contacts.length; i++) {
                    if (contacts[i].id == contact.id) {
                        contacts.splice(i, 1, contact);
                        break;
                    }
                }
            }
            if (idReturn)
                idReturn(id);
            _this.storeContacts(contacts, success, failure);
        }).catch(function () {
            contact.id = contact.id != null ? contact.id : 0;
            var contacts = [contact];
            _this.storeContacts(contacts, success, failure);
        });
    };
    Contacts.prototype.storeContacts = function (contacts, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.setItem('contacts', contacts).then(function (ct) {
            console.log("contacts:Set contacts list: " + JSON.stringify(ct));
            if (success) {
                success(ct);
            }
        }).catch(function (e) {
            console.log("contacts:Could not set contacts list: " + JSON.stringify(e));
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
    Contacts.prototype.unStoreContact = function (id, success, failure) {
        var _this = this;
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.getItem('contacts').then(function (contacts) {
            contacts = contacts.filter(function (ct) { return ct.id != id; }).forEach(function (ct, i) { return ct.id = i; });
            _this.storeContacts(contacts, success, failure);
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
    Contacts.prototype.createContact = function (id, first_name, last_name, company, phone, email, picture, notes) {
        return {
            id: id,
            first_name: first_name,
            last_name: last_name,
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