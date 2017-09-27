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
import { Clipboard as ClipboardClass } from '@ionic-native/clipboard';
var Clipboard = (function () {
    function Clipboard(clipboard) {
        this.clipboard = clipboard;
    }
    Clipboard.prototype.copy = function (text, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.clipboard.copy(text).then(function () {
            if (success)
                success();
        }).catch(function () {
            if (failure)
                failure();
        });
    };
    Clipboard.prototype.paste = function (success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.clipboard.paste().then(function () {
            if (success)
                success();
        }).catch(function () {
            if (failure)
                failure();
        });
    };
    return Clipboard;
}());
Clipboard = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ClipboardClass])
], Clipboard);
export { Clipboard };
//# sourceMappingURL=clipboard.js.map