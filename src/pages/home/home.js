var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Speech } from '../../classes/speech';
var HomePage = (function () {
    function HomePage() {
    }
    return HomePage;
}());
HomePage = __decorate([
    Component({
        SpeechS: SpeechS,
    }, peech, selector, providers, [], providers, [], 'page-home', templat, eUrl, 'home.html')
], HomePage);
export { HomePage };
i;
picture: string;
company: string;
email: string;
phone: string;
notes: string;
boolean;
loading: boolean = false;
loading: boolean = false;
text: string;
false;
constructor(pu, private, speech, Speech, private, speech, Speechblic, navCtrl, NavController);
{
}
endSpeech();
void {
    this: .loading = false,
    this: .speech.stopListening()
};
text: string;
loading: boolean = false;
constructor(private, speech, Speech);
{ }
beginSpeech();
void {
    this: .loading = true,
    this: .speech.listen(function (text) { return _this.text = text; })
};
endSpeech();
void {
    this: .loading = false,
    this: .speech.stopListening()
};
resetValues();
void {
    default:  = false,
    this: .first_name = "First",
    this: .last_name = "Last",
    this: .middle_initial = "M.",
    this: .picture = "",
    this: .company = "Arigato, Inc.",
    this: .email = "me@arigato.com",
    this: .phone = "(000)000-0000",
    this: .notes = "Tap record to create a contact."
};
nullValues();
void { true: ,
    this: .first_name = null,
    this: .last_name = null,
    this: .middle_initial = null,
    this: .picture = null,
    this: .company = null,
    this: .email = null,
    this: .phone = null,
    this: .notes = null
};
//# sourceMappingURL=home.js.map