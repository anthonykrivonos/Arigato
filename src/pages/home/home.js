var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, Slides } from 'ionic-angular';
import { Speech } from '../../classes/speech';
import { Global } from '../../classes/global';
import { Contacts } from '../../classes/contacts';
import { Parser } from '../../classes/parser';
import { Alert } from '../../classes/alert';
import { Token as TokenClass } from '../../classes/token';
import { Clipboard } from '../../classes/clipboard';
import { Toast } from '../../classes/toast';
import { Config } from '../../classes/config';
import { Observable } from 'rxjs';
var HomePage = (function () {
    function HomePage(navCtrl, speech, plt, global, contacts, parser, alert, tokenClass, clipboard, toast, config) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.speech = speech;
        this.plt = plt;
        this.global = global;
        this.contacts = contacts;
        this.parser = parser;
        this.alert = alert;
        this.tokenClass = tokenClass;
        this.clipboard = clipboard;
        this.toast = toast;
        this.config = config;
        this.MENU_SLIDE = 0;
        this.LIVE_SLIDE = 1;
        this.EDIT_SLIDE = 2;
        this.default = true;
        this.logger = true;
        this.loading = false;
        this.slide = 0;
        this.global.logger('hide', function () {
            _this.hideLogger();
        });
        this.global.logger('show', function () {
            _this.showLogger();
        });
        this.global.storage('save', function () {
            _this.loadContacts();
        });
        this.global.livecard('delete', function () {
            _this.resetValues();
        });
        this.global.home('sort', function (method) {
            _this.sort(null, method);
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.resetValues();
        this.isAndroid = this.plt.is('ios') ? false : true;
        Observable.timer(1000).take(1).subscribe(function () {
            _this.loadContacts(false);
            _this.tokenClass.getToken(function (token) {
                _this.token = token.token;
                console.log("Got token " + _this.token);
            }, function () {
                console.error("Could not get token.");
            });
            _this.config.load(function (config) {
                _this.configuration = config;
            });
        });
    };
    HomePage.prototype.slideTo = function (slide) {
        this.global.slides('hide');
        this.slides.slideTo(slide, 250);
    };
    HomePage.prototype.changeSlide = function () {
        this.slide = this.slides.getActiveIndex();
        this.handleSlide();
    };
    HomePage.prototype.handleSlide = function () {
        switch (this.slide) {
            case 0:
                this.global.editablecard('close');
                break;
            case 1:
                break;
            default:
                break;
        }
    };
    HomePage.prototype.beginSpeech = function () {
        var _this = this;
        if (this.default) {
            this.default = !this.default;
            this.resetValues();
        }
        this.loading = true;
        this.speech.listen(function (text) {
            _this.text = text;
        });
    };
    HomePage.prototype.endSpeech = function () {
        var _this = this;
        this.loading = false;
        this.speech.stopListening(function () {
            _this.config.get("overwriteOnRecord", function (overwriteOnRecord) {
                console.log("Started parse of text " + _this.text);
                var contactObj = _this.parser.parse(_this.text, _this.token, _this.unparseContactObj(), overwriteOnRecord);
                console.log("Ended parse " + JSON.stringify(contactObj, null, 2));
                _this.parseContactObj(contactObj);
            });
        });
    };
    HomePage.prototype.parseContactObj = function (contactObj) {
        this.first_name = contactObj.first_name;
        this.last_name = contactObj.last_name;
        this.picture = contactObj.picture;
        this.company = contactObj.company;
        this.email = contactObj.email;
        this.phone = contactObj.phone;
        this.notes = contactObj.note;
    };
    HomePage.prototype.unparseContactObj = function () {
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
    HomePage.prototype.showLogger = function () {
        this.logger = true;
    };
    HomePage.prototype.hideLogger = function () {
        this.logger = false;
    };
    HomePage.prototype.resetValues = function () {
        this.default = true;
    };
    HomePage.prototype.loadContacts = function (slide) {
        var _this = this;
        if (slide === void 0) { slide = true; }
        this.contacts.getContacts(function (stored) {
            _this.config.get("sortBy", function (sortBy) {
                _this.stored = _this.sort(stored, sortBy);
                _this.slideTo(slide ? 1 : 0);
            });
        });
    };
    HomePage.prototype.deleteAll = function () {
        var _this = this;
        this.alert.showAlert('Delete all contacts?', 'This cannot be undone.', function () {
            _this.contacts.unStoreContacts(function () {
                _this.stored = [];
            });
        });
    };
    HomePage.prototype.copyToken = function () {
        var _this = this;
        this.clipboard.copy(this.token, function () {
            _this.toast.showToast('Token copied to clipboard!');
        }, function () {
            _this.toast.showToast('Token not copied to clipboard!');
        });
    };
    HomePage.prototype.saveConfig = function () {
        this.config.save(this.configuration);
    };
    HomePage.prototype.sort = function (arr, method) {
        if (arr === void 0) { arr = null; }
        if (arr == null)
            arr = this.stored ? this.stored : [];
        var sortProperty;
        switch (method) {
            case "firstName":
                sortProperty = "first_name";
                break;
            case "lastName":
                sortProperty = "last_name";
                break;
            case "phoneNumber":
                sortProperty = "phone";
                break;
            case "emailAddress":
                sortProperty = "email";
                break;
            default:
                sortProperty = "id";
        }
        return arr.sort(function (a, b) {
            if (a[sortProperty] < b[sortProperty])
                return -1;
            else if (a[sortProperty] > b[sortProperty])
                return 1;
            return 0;
        });
    };
    return HomePage;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Component({
        selector: 'page-home',
        providers: [Speech, Global, Contacts, Parser, Alert, TokenClass, Clipboard, Toast, Config],
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, Speech, Platform, Global, Contacts, Parser, Alert, TokenClass, Clipboard, Toast, Config])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map