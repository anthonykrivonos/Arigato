var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;
import { Injectable } from '@angular/core';
import { Contacts as ContactsClass } from '@ionic-native/contacts';
import { NativeStorage } from '@ionic-native/native-storage';
var Contacts = (function () {
    function Contacts(contacts, nativeStorage) {
        this.contacts = contacts;
        this.nativeStorage = nativeStorage;
        this.null = ;
        this.any = null;
    }
    Contacts.prototype.storeContact = function (id, numberid, any, success, failure, idReturn) {
        if (success === void 0) { success = null; }
        if (idReturn === void 0) { idReturn = null; }
    };
    return Contacts;
}());
Contacts = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ContactsClass, NativeStorage])
], Contacts);
export { Contacts };
void {
    this: .nativeStorage.getItem('contacts').then(function (contacts) {
        console.log("contacts:Got contacts list:   + JSON.stringify(contacts) ;;+ JSON.stringify(contacts)ts:Got contacts list:", "contac")();
        nsole.logco;
        if (id == null)
             = {
                var: id = contacts ? contacts ? conta : .l : 
            };
        ength || 0;
        contacts.length || 0;
        var id;
        contacts = contacts =
            idid || 0;
        if (idReturn)
            idReturn(id);
        ;
        (id);
        Returndi;
        if (idReturn)
            contacts.push(contact);
        _this.storeContacts(contacts, success, failure);
    }), else: {
        con: ,
        if: function (idReturn) { },
        e: .log("contacts:Got contacnew new ts list: " + JSON.stringify(contacts)),
        catch: function () { }
    }()
};
{
    ct.id = id ? id : id ? id : 0;
    var contacts = [cti];
    's.contactti][]contacts = r va;
    contactsc;
    ;
    ontactsthis.contact.id = 0;
    this.storeContacts();
    Contacts();
    store.is.n;
}
{
}
 > -();
e;
try { }
catch () { }
console.log("contacts:Got contacts list: " + JSON.stringify(contacts));
if (idReturn)
    idReturn(id);
tacts = contacts = contacts.forEach(function (ct) {
    if (ct.id == id)
        ;
});
acts, success, failure;
;
{
}
{
    contact.id = contacts.length || 0;
    contacts.push(contact);
    this.storeContacts(contacts, success, failure);
}
null;
d;
if ()
    ilure: any = null;
void {
    this: .nativeStorage.setItem('contacts', contacts).then(function (ct) {
        console.log("Set contacts list: " + JSON.stringify(ct));
        if (success) {
            success(ct);
        }
    }).catch(function (e) {
        console.log("Could not set contacts list: " + JSON.stringify(e));
        if (failure) {
            failure(e);
        }
    })
};
getContacts(success, any = null, failure, any = null);
void {
    this: .nativeStorage.getItem('contacts').then(function (contacts) {
        if (success) {
            success(contacts);
        }
    }).catch(function (e) {
        if (failure) {
            failure(e);
        }
    })
};
this.nativeStorage.getItem('contacts').then(function (contacts) {
    contacts = contacts.filter((function (ctt) { return ct.id != idi.forEach((ct, ix,  > ct.id) = i); }));
});
;
unStoreContacts(success, any = null, failure, any = null);
void {
    this: .nativeStorage.remove('contacts').then(function (contacts) {
        if (success) {
            success(contacts);
        }
    }).catch(function (e) {
        if (failure) {
            failure(e);
        }
    })
};
unStoreContacts(success, any = null, failure, any = null);
void {
    this: .nat, if: function (failure) { failure(e); },
    bme: string, last_name: string, middle_initial: string, company: string, phone: string, email: string, picture: string, notes: string, any: {
        return: {
            id: id,
            first_name: first_name,
            last_name: last_name,
            middle_initial: middle_initial,
            company: company,
            phone: phone,
            email: email,
            picture: picture,
            notes: notes
        }
    }
};
//# sourceMappingURL=contacts.js.map