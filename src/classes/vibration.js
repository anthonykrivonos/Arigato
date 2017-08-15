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
import { Vibration as Vibrate } from '@ionic-native/vibration';
import { Observable } from 'rxjs';
var Vibration = (function () {
    function Vibration(vibrate) {
        this.vibrate = vibrate;
        this.DEBUG = true;
        this.RESPONSIVE_VIBRATION = 1;
        this.SHORT_VIBRATION = 100;
        this.MEDIUM_VIBRATION = 200;
        this.LONG_VIBRATION = 400;
        this.EXTRA_VIBRATION = 600;
    }
    Vibration.prototype.vibration = function (duration, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        this.vibrate.vibrate(0);
        this.vibrate.vibrate(duration);
        Observable.timer(duration).take(1).subscribe(function () {
            if (_this.DEBUG) {
                console.log("Vibrated for " + duration + "ms");
            }
            if (callback) {
                callback();
            }
        });
    };
    Vibration.prototype.vibrationResponsive = function (callback) {
        if (callback === void 0) { callback = null; }
        this.vibration(this.RESPONSIVE_VIBRATION, function () {
            if (callback) {
                callback();
            }
        });
    };
    Vibration.prototype.vibrationShort = function (callback) {
        if (callback === void 0) { callback = null; }
        this.vibration(this.SHORT_VIBRATION, function () {
            if (callback) {
                callback();
            }
        });
    };
    Vibration.prototype.vibrationMedium = function (callback) {
        if (callback === void 0) { callback = null; }
        this.vibration(this.MEDIUM_VIBRATION, function () {
            if (callback) {
                callback();
            }
        });
    };
    Vibration.prototype.vibrationLong = function (callback) {
        if (callback === void 0) { callback = null; }
        this.vibration(this.LONG_VIBRATION, function () {
            if (callback) {
                callback();
            }
        });
    };
    Vibration.prototype.vibrationExtra = function (callback) {
        if (callback === void 0) { callback = null; }
        this.vibration(this.EXTRA_VIBRATION, function () {
            if (callback) {
                callback();
            }
        });
    };
    return Vibration;
}());
Vibration = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Vibrate])
], Vibration);
export { Vibration };
//# sourceMappingURL=vibration.js.map