import { Injectable } from '@angular/core';

import { Contacts as ContactsClass, Contact, ContactField, ContactName, ContactOrganization } from '@ionic-native/contacts';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class Contacts {

      constructor(private contacts:ContactsClass, public nativeStorage:NativeStorage) {}

      storeContact(contact:any, success:any = null, failure:any = null, idReturn:any = null):void {
            this.nativeStorage.getItem('contacts').then((contacts) => {
                  console.log("contacts:Got contacts list: " + JSON.stringify(contacts));
                  console.log('contacts:Got id: ' + contact.id);
                  if (contact.id == null) {
                        var id = contacts ? contacts.length : 0;
                        console.log('contacts:Creating new contact with id ' + id + '.');
                        contact.id = id;
                        contacts.push(contact);
                  } else {
                        console.log('contacts:Changing contact with id ' + contact.id + '.');
                        for (var i = 0; i < contacts.length; i++) {
                              if (contacts[i].id == contact.id) {
                                    contacts.splice(i, 1, contact);
                                    break;
                              }
                        }
                  }
                  if (idReturn) idReturn(id);
                  this.storeContacts(contacts, success, failure);
            }).catch(()=>{
                  contact.id = contact.id != null ? contact.id : 0;
                  var contacts = [contact];
                  this.storeContacts(contacts, success, failure);
            });
      }

      storeContacts(contacts:any, success:any = null, failure:any = null):void {
            this.nativeStorage.setItem('contacts', contacts).then((ct) => {
                  console.log("contacts:Set contacts list: " + JSON.stringify(ct));
                  if (success) {success(ct);}
            }).catch((e) => {
                  console.log("contacts:Could not set contacts list: " + JSON.stringify(e));
                  if (failure) {failure(e);}
            });
      }

      getContacts(success:any = null, failure:any = null):void {
            this.nativeStorage.getItem('contacts').then((contacts) => {
                  if (success) {success(contacts);}
            }).catch((e) => {
                  if (failure) {failure(e);}
            });
      }

      unStoreContact(id:number, success:any = null, failure:any = null):void {
            this.nativeStorage.getItem('contacts').then((contacts) => {
                  for (var i = 0; i < contacts.length; i++) {
                        if (contacts[i].id == id) {
                              contacts.splice(i, 1);
                              for (var j = 0; j < contacts.length; j++) contacts[j].id = j;
                              break;
                        }
                  }
                  this.storeContacts(contacts, success, failure);
            });
      }

      unStoreContacts(success:any = null, failure:any = null):void {
            this.nativeStorage.remove('contacts').then((contacts) => {
                  if (success) {success(contacts);}
            }).catch((e) => {
                  if (failure) {failure(e);}
            });
      }

      saveContact(contactObj:any, success:any = null, failure:any = null) {
            let contact = this.contacts.create();
            contact.name = new ContactName(null, contactObj.last_name, contactObj.first_name);
            if (contactObj.company) contact.organizations = [new ContactOrganization(null, contactObj.company)];
            if (contactObj.phone) contact.phoneNumbers = [new ContactField('other', contactObj.phone, true)];
            if (contactObj.email) contact.emails = [new ContactField('email', contactObj.email, true)];
            if (contactObj.email) contact.emails = [new ContactField('email', contactObj.email, true)];
            contact.save().then(
                  () => {if (success) success()},
                  (e) => {if (failure) failure(e)}
            ).catch((e) => {if (failure) failure(e)});
      }

      createContact(id:number, first_name:string, last_name:string, company:string, phone:string, email:string, picture:string, notes:string):any {
            return {
                  id,
                  first_name,
                  last_name,
                  company,
                  phone,
                  email,
                  picture,
                  notes
            };
      }
}
