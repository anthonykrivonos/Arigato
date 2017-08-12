var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Speech } from '../../classes/speech';
var HomePage = (function () {
    function HomePage(pu, speech, speech, NavController) {
        if (speech === void 0) { speech = navCtrl; }
        this.speech = speech;
        this.speech = speech;
        this.loading = false;
        this.loading = false;
        this.loading = false;
    }
    HomePage.prototype.endSpeech = function () {
        this.loading = false;
        this.speech.stopListening();
    };
    HomePage.prototype.beginSpeech = function () {
        var _this = this;
        this.loading = true;
        this.speech.listen(function (text) { return _this.text = text; });
    };
    HomePage.prototype.endSpeech = function () {
        this.loading = false;
        this.speech.stopListening();
    };
    HomePage.prototype.resetValues = function () {
        this.default = false;
        this.first_name = "First";
        this.last_name = "Last";
        this.middle_initial = "M.";
        this.picture = "";
        this.company = "Arigato, Inc.";
        this.email = "me@arigato.com";
        this.phone = "(000)000-0000";
        this.notes = "Tap record to create a contact.";
    };
    HomePage.prototype.nullValues = function () {
        this.default = true;
        this.first_name = null;
        this.last_name = null;
        this.middle_initial = null;
        this.picture = null;
        this.company = null;
        this.email = null;
        this.phone = null;
        this.notes = null;
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        SpeechS: SpeechS,
    }, peech, selector, providers, [], providers, [], 'page-home', templat, eUrl, 'home.html'),
    __metadata("design:paramtypes", [Object, Speech, Object, Object])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map