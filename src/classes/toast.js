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
import { ToastController } from 'ionic-angular';
import { Vibration } from '../classes/vibration';
var Toast = (function () {
    function Toast(toastCtrl, vibration) {
        this.toastCtrl = toastCtrl;
        this.vibration = vibration;
    }
    Toast.prototype.showToast = function (message, position, duration) {
        if (position === void 0) { position = 'top'; }
        if (duration === void 0) { duration = 2000; }
        var toast = this.toastCtrl.create({
            cssClass: 'toast',
            message: message,
            duration: duration,
            position: position,
            showCloseButton: true
        });
        toast.present();
        this.vibration.vibrationResponsive();
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
    };
    return Toast;
}());
Toast = __decorate([
    Injectable(),
    Component({
        providers: [Vibration]
    }),
    __metadata("design:paramtypes", [ToastController, Vibration])
], Toast);
export { Toast };
//# sourceMappingURL=toast.js.map