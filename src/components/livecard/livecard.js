var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Camera } from '../../classes/camera';
import { Contacts } from '../../classes/contacts';
import { Global } from '../../classes/global';
import { Toast } from '../../classes/toast';
import { Alert } from '../../classes/alert';
import { Config } from '../../classes/config';
var LivecardComponent = (function () {
    function LivecardComponent(camera, contacts, global, toast, alert, config) {
        this.camera = camera;
        this.contacts = contacts;
        this.global = global;
        this.toast = toast;
        this.alert = alert;
        this.config = config;
    }
    LivecardComponent.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture(function (picture) {
            _this.picture = picture;
        });
    };
    LivecardComponent.prototype.save = function () {
        var _this = this;
        if (this.validate(function (errorText) {
            _this.toast.showToast(errorText, 'top', 4000);
        })) {
            this.toast.showToast("Saved " + this.first_name + " in storage.");
            var contactObj = this.contacts.createContact(null, this.first_name, this.last_name, this.company, this.phone, this.email, this.picture, this.notes);
            this.contacts.storeContact(contactObj, function () {
                _this.global.storage('save');
                _this.config.get("clearContactOnSave", function (clearContactOnSave) {
                    if (clearContactOnSave)
                        _this.clear(false);
                });
            });
        }
    };
    LivecardComponent.prototype.validate = function (callback) {
        if (callback === void 0) { callback = null; }
        var errors = [], valid = true, errorText;
        if (this.first_name == null) {
            errors.push('first name');
            valid = false;
        }
        ;
        if (this.phone == null && this.email == null) {
            errors.push('phone or email');
            valid = false;
        }
        if (errors.length > 0) {
            errorText = 'Cannot create new contact. User must have a ';
            errors.forEach(function (er, i) {
                if (i == 0)
                    errorText += er;
                else if (i < errors.length - 1 && errors.length != 2)
                    errorText += ', ' + er;
                else
                    errorText += ' and ' + er + '.';
            });
        }
        if (errorText && callback)
            callback(errorText);
        return valid;
    };
    LivecardComponent.prototype.resetValues = function () {
        this.first_name = null;
        this.last_name = null;
        this.picture = null;
        this.company = null;
        this.email = null;
        this.phone = null;
        this.notes = null;
    };
    LivecardComponent.prototype.clear = function (alert) {
        var _this = this;
        if (alert === void 0) { alert = true; }
        if (alert) {
            this.alert.showAlert("Clear contact?", 'This will reset all contact info.', function () {
                _this.resetValues();
                _this.global.livecard('clear');
            });
        }
        else {
            this.resetValues();
            this.global.livecard('clear');
        }
    };
    return LivecardComponent;
}());
__decorate([
    Input('first_name'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "first_name", void 0);
__decorate([
    Input('last_name'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "last_name", void 0);
__decorate([
    Input('picture'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "picture", void 0);
__decorate([
    Input('company'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "company", void 0);
__decorate([
    Input('email'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "email", void 0);
__decorate([
    Input('phone'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "phone", void 0);
__decorate([
    Input('notes'),
    __metadata("design:type", String)
], LivecardComponent.prototype, "notes", void 0);
LivecardComponent = __decorate([
    Component({
        selector: 'livecard',
        providers: [Camera, Contacts, Global, Toast, Alert, Config],
        templateUrl: 'livecard.html'
    }),
    __metadata("design:paramtypes", [Camera, Contacts, Global, Toast, Alert, Config])
], LivecardComponent);
export { LivecardComponent };
//# sourceMappingURL=livecard.js.map