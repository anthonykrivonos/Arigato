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
import { Events } from 'ionic-angular';
var Global = (function () {
    function Global(events) {
        this.events = events;
    }
    Global.prototype.event = function (name, callback) {
        if (callback === void 0) { callback = null; }
        callback ? this.events.subscribe(name, function () { return callback(); }) : this.events.publish(name);
    };
    Global.prototype.home = function (option, callback) {
        if (callback === void 0) { callback = null; }
        this.event("home:" + option, callback);
    };
    Global.prototype.button = function (option, callback) {
        if (callback === void 0) { callback = null; }
        this.event("button:" + option, callback);
    };
    Global.prototype.storage = function (option, callback) {
        if (callback === void 0) { callback = null; }
        this.event("storage:" + option, callback);
    };
    Global.prototype.logger = function (option, callback) {
        if (callback === void 0) { callback = null; }
        this.event("logger:" + option, callback);
    };
    Global.prototype.editablecard = function (option, callback) {
        if (callback === void 0) { callback = null; }
        this.event("editablecard:" + option, callback);
    };
    Global.prototype.livecard = function (option, callback) {
        if (callback === void 0) { callback = null; }
        this.event("livecard:" + option, callback);
    };
    Global.prototype.slides = function (option, callback) {
        if (callback === void 0) { callback = null; }
        this.event("slides:" + option, callback);
    };
    return Global;
}());
Global = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Events])
], Global);
export { Global };
//# sourceMappingURL=global.js.map