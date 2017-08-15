var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injectable } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { Vibration } from '../classes/vibration';
var Action = (function () {
    function Action(actionSheetCtrl, vibration) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.vibration = vibration;
    }
    Action.prototype.editableCardAction = function (contact, del, edit, add, call, text, email) {
        if (del === void 0) { del = null; }
        if (edit === void 0) { edit = null; }
        if (add === void 0) { add = null; }
        if (call === void 0) { call = null; }
        if (text === void 0) { text = null; }
        if (email === void 0) { email = null; }
        var buttons = [
            {
                text: 'Delete',
                role: 'destructive',
                handler: function () {
                    console.log('Delete clicked');
                    if (del)
                        del(contact.id);
                }
            },
            {
                text: 'Edit',
                handler: function () {
                    console.log('Edit clicked');
                    if (edit)
                        edit();
                }
            },
            {
                text: 'Add to Contacts',
                handler: function () {
                    console.log('Add to Contacts clicked');
                    if (add)
                        add(contact);
                }
            },
            {
                text: 'Close',
                role: 'cancel',
                handler: function () {
                    console.log('Close clicked');
                }
            }
        ];
        if (contact.email) {
            buttons.splice(2, 0, {
                text: "Email " + contact.email,
                handler: function () {
                    console.log('Email clicked');
                    if (email)
                        email(contact.email);
                }
            });
        }
        if (contact.phone) {
            buttons.splice(2, 0, {
                text: "Call " + contact.phone,
                handler: function () {
                    console.log('Call clicked');
                    if (call)
                        call(contact.phone);
                }
            }, {
                text: "Text " + contact.phone,
                handler: function () {
                    console.log('Text clicked');
                    if (text)
                        text(contact.phone);
                }
            });
        }
        var actionSheet = this.actionSheetCtrl.create({
            title: "" + contact.first_name + (contact.last_name ? ' ' + contact.last_name : ''),
            buttons: buttons
        });
        actionSheet.present();
        this.vibration.vibrationShort();
    };
    return Action;
}());
Action = __decorate([
    Injectable(),
    Component({
        providers: [ActionSheetController, Vibration]
    }),
    __metadata("design:paramtypes", [ActionSheetController, Vibration])
], Action);
export { Action };
//# sourceMappingURL=action.js.map