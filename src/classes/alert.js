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
import { AlertController } from 'ionic-angular';
import { Vibration } from '../classes/vibration';
var Alert = (function () {
    function Alert(alertCtrl, vibration) {
        this.alertCtrl = alertCtrl;
        this.vibration = vibration;
    }
    Alert.prototype.showAlert = function (title, message, confirmed, cancelled, confirm, cancel) {
        if (confirmed === void 0) { confirmed = null; }
        if (cancelled === void 0) { cancelled = null; }
        if (confirm === void 0) { confirm = 'Confirm'; }
        if (cancel === void 0) { cancel = 'Cancel'; }
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: cancel,
                    role: 'cancel',
                    handler: function () {
                        if (cancelled)
                            cancelled();
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: confirm,
                    handler: function () {
                        if (confirmed)
                            confirmed();
                        console.log(confirm + ' clicked');
                    }
                }
            ]
        });
        alert.present();
        this.vibration.vibrationShort();
    };
    return Alert;
}());
Alert = __decorate([
    Injectable(),
    Component({
        providers: [AlertController, Vibration]
    }),
    __metadata("design:paramtypes", [AlertController, Vibration])
], Alert);
export { Alert };
//# sourceMappingURL=alert.js.map