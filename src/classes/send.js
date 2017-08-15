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
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';
import { EmailComposer } from '@ionic-native/email-composer';
var Send = (function () {
    function Send(callNumber, sms, emailComposer) {
        this.callNumber = callNumber;
        this.sms = sms;
        this.emailComposer = emailComposer;
    }
    Send.prototype.call = function (contact, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.callNumber.callNumber(contact.phone, true)
            .then(function () { if (success)
            success(); })
            .catch(function () { if (failure)
            failure(); });
    };
    Send.prototype.text = function (contact, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.sms.send(contact.phone, '')
            .then(function () { if (success)
            success(); })
            .catch(function () { if (failure)
            failure(); });
    };
    Send.prototype.email = function (contact, success, failure) {
        var _this = this;
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.emailComposer.isAvailable().then(function (available) {
            console.log("Checking availability");
            if (available) {
                console.log("Email is available");
                _this.emailComposer.hasPermission()
                    .then(function () {
                    console.log("User has permission");
                    var email = {
                        to: contact.email,
                        subject: '',
                        body: "",
                        isHtml: true
                    };
                    _this.emailComposer.open(email)
                        .then(function () { if (success)
                        success(); })
                        .catch(function () { if (failure)
                        failure(); });
                })
                    .catch(function () { if (failure)
                    failure(); });
            }
            else {
                if (failure)
                    failure();
            }
        }).catch(function () { if (failure)
            failure(); });
    };
    return Send;
}());
Send = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CallNumber, SMS, EmailComposer])
], Send);
export { Send };
//# sourceMappingURL=send.js.map