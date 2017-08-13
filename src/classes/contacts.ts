import { Injectable } from '@angular/core';

import { Contacts as ContactsClass, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class Contacts {

      constructor(private contacts:ContactsClass, public nativeStorage:NativeStorage) {}

      storeContact(id:number, contact:any, success:any = null, failure:any = null, idReturn:any = null):void {
            this.nativeStorage.getItem('contacts').then((contacts) => {
                  console.log("contacts:Got contacts list: " + JSON.stringify(contacts));
                  if (id == null) {
                        var id = contacts ? contacts.length : 0;
                        console.log('contacts:Creating new contact with id ' + id + '.');
                        contact.id = id;
                        contacts.push(contact);
                  } else {
                        console.log('contacts:Changing contact with id ' + id + '.');
                        contacts = contacts.forEach((ct)=>{
                              if (ct.id == id) ct = contact;
                        });
                  }
                  if (idReturn) idReturn(id);
                  this.storeContacts(contacts, success, failure);
            }).catch(()=>{
                  contact.id = id ? id : 0;
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
                  contacts = contacts.filter((ct)=>ct.id != id).forEach((ct,i)=>ct.id = i);
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

      createContact(first_name:string, last_name:string, company:string, phone:string, email:string, picture:string, notes:string):any {
            return {
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
