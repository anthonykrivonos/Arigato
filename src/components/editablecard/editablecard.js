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
import { Alert } from '../../classes/alert';
import { Toast } from '../../classes/toast';
import { Action } from '../../classes/action';
import { Send } from '../../classes/send';
import { Config } from '../../classes/config';
import { Observable } from 'rxjs';
var EditablecardComponent = (function () {
    function EditablecardComponent(camera, contacts, global, alert, toast, action, send, config) {
        var _this = this;
        this.camera = camera;
        this.contacts = contacts;
        this.global = global;
        this.alert = alert;
        this.toast = toast;
        this.action = action;
        this.send = send;
        this.config = config;
        this.editing = false;
        this.global.editablecard('close', function () {
            Observable.timer(500).take(1).subscribe(function () { return _this.editing = false; });
        });
    }
    EditablecardComponent.prototype.actionSheet = function () {
        var _this = this;
        var contact = this.unparseContactObj();
        this.action.editableCardAction(contact, function () {
            _this.delete();
        }, function () {
            _this.toggleEdit();
        }, function () {
            _this.config.get("saveAvatarsToAlbum", function (saveAvatarsToAlbum) {
                if (!saveAvatarsToAlbum)
                    contact.picture = null;
                _this.contacts.saveContact(contact, function () {
                    _this.toast.showToast("Saved " + contact.first_name + " in contacts.");
                    _this.config.get("deleteContactOnAdd", function (deleteContactOnAdd) {
                        if (deleteContactOnAdd)
                            _this.delete(false);
                    });
                });
            });
        }, function () {
            _this.send.call(contact, null, function () {
                _this.toast.showToast("Could not call " + contact.first_name + ".");
            });
        }, function () {
            _this.send.text(contact, null, function () {
                _this.toast.showToast("Could not text " + contact.first_name + ".");
            });
        }, function () {
            _this.send.email(contact, function () {
                alert("Opened email " + contact.email);
            }, function (e) {
                _this.toast.showToast("Could not email " + contact.first_name + ".");
                console.error(e ? "Could not send email: " + e : "Could not send email");
            });
        });
    };
    EditablecardComponent.prototype.toggleEdit = function () {
        this.editing = !this.editing;
    };
    EditablecardComponent.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture(function (picture) {
            _this.picture = picture;
        });
    };
    EditablecardComponent.prototype.save = function () {
        var _this = this;
        if (this.id != null) {
            var contactObj = this.contacts.createContact(this.id, this.first_name, this.last_name, this.company, this.phone, this.email, this.picture, this.notes);
            this.contacts.storeContact(contactObj, null, null, function () {
                _this.global.storage('save');
            });
        }
    };
    EditablecardComponent.prototype.delete = function (alert) {
        var _this = this;
        if (alert === void 0) { alert = true; }
        var name = this.first_name;
        if (alert) {
            this.alert.showAlert("Delete " + name + "'s contact?", 'This cannot be undone.', function () {
                _this.contacts.unStoreContact(_this.id, function () {
                    _this.global.storage('save');
                    _this.toast.showToast("Deleted " + name + " from storage.");
                });
            });
        }
        else {
            this.contacts.unStoreContact(this.id, function () {
                _this.global.storage('save');
            });
        }
    };
    EditablecardComponent.prototype.unparseContactObj = function () {
        return {
            first_name: this.first_name,
            last_name: this.last_name,
            company: this.company,
            phone: this.phone,
            email: this.email,
            picture: this.picture,
            notes: this.notes
        };
    };
    return EditablecardComponent;
}());
__decorate([
    Input('id'),
    __metadata("design:type", Number)
], EditablecardComponent.prototype, "id", void 0);
__decorate([
    Input('first_name'),
    __metadata("design:type", String)
], EditablecardComponent.prototype, "first_name", void 0);
__decorate([
    Input('last_name'),
    __metadata("design:type", String)
], EditablecardComponent.prototype, "last_name", void 0);
__decorate([
    Input('picture'),
    __metadata("design:type", String)
], EditablecardComponent.prototype, "picture", void 0);
__decorate([
    Input('company'),
    __metadata("design:type", String)
], EditablecardComponent.prototype, "company", void 0);
__decorate([
    Input('email'),
    __metadata("design:type", String)
], EditablecardComponent.prototype, "email", void 0);
__decorate([
    Input('phone'),
    __metadata("design:type", String)
], EditablecardComponent.prototype, "phone", void 0);
__decorate([
    Input('notes'),
    __metadata("design:type", String)
], EditablecardComponent.prototype, "notes", void 0);
EditablecardComponent = __decorate([
    Component({
        selector: 'editablecard',
        providers: [Camera, Contacts, Global, Alert, Toast, Action, Send, Config],
        templateUrl: 'editablecard.html'
    }),
    __metadata("design:paramtypes", [Camera, Contacts, Global, Alert, Toast, Action, Send, Config])
], EditablecardComponent);
export { EditablecardComponent };
//# sourceMappingURL=editablecard.js.map