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
import { Observable } from 'rxjs';
var EditablecardComponent = (function () {
    function EditablecardComponent(camera, contacts, global, alert, toast) {
        var _this = this;
        this.camera = camera;
        this.contacts = contacts;
        this.global = global;
        this.alert = alert;
        this.toast = toast;
        this.editing = false;
        this.global.editablecard('close', function () {
            Observable.timer(500).take(1).subscribe(function () { return _this.editing = false; });
        });
    }
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
    EditablecardComponent.prototype.delete = function () {
        var _this = this;
        var name = this.first_name;
        this.alert.showAlert("Delete " + name + "'s info?", 'This cannot be undone.', function () {
            _this.contacts.unStoreContact(_this.id, function () {
                _this.global.storage('save');
                _this.toast.showToast("Deleted " + name + " from storage.");
            });
        });
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
        providers: [Camera, Contacts, Global, Alert, Toast],
        templateUrl: 'editablecard.html'
    }),
    __metadata("design:paramtypes", [Camera, Contacts, Global, Alert, Toast])
], EditablecardComponent);
export { EditablecardComponent };
//# sourceMappingURL=editablecard.js.map