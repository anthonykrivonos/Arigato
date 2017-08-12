import { Injectable } from '@angular/core';

import { Contacts as ContactsClass, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class Contacts {

      constructor(private contacts:ContactsClass, public nativeStorage:NativeStorage) {}

      storeContact(contact:any, success:any = null, failure:any = null):void {
            this.nativeStorage.getItem('contacts').then((contacts) => {
                  contacts.push(contact);
                  this.storeContacts(contacts, success, failure);
            });
      }

      storeContacts(contacts:any, success:any = null, failure:any = null):void {
            this.nativeStorage.setItem('contacts', contacts).then((ct) => {
                  console.log("Set contacts list: " + JSON.stringify(ct));
                  if (success) {success(ct);}
            }).catch((e) => {
                  console.log("Could not set contacts list: " + JSON.stringify(e));
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

      unStoreContacts(success:any = null, failure:any = null):void {
            this.nativeStorage.remove('contacts').then((contacts) => {
                  if (success) {success(contacts);}
            }).catch((e) => {
                  if (failure) {failure(e);}
            });
      }

      createContact(id:number, first_name:string, last_name:string, middle_initial:string, company:string, phone:string, email:string, picture:string, notes:string):any {
            return {
                  id,
                  first_name,
                  last_name,
                  middle_initial,
                  company,
                  phone,
                  email,
                  picture,
                  notes
            };
      }
}
