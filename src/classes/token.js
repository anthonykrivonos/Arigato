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
import { Http, Headers, RequestOptions } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
var Token = (function () {
    function Token(http, nativeStorage, uniqueDeviceID) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.uniqueDeviceID = uniqueDeviceID;
        this.TEMPLATE_UUID = 'DEV_UUID_TEMPLATE';
        this.PARSEGATO_AUTH = 'https://parsergato.herokuapp.com/auth';
    }
    Token.prototype.auth = function (uid, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        console.log("Calling auth with uid " + uid);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        this.http.post(this.PARSEGATO_AUTH, this.uidToJSONString(uid), options).map(function (res) { return res.json(); }).take(1).subscribe(function (res) {
            if (res.token) {
                if (success)
                    success(res);
            }
            else {
                if (failure)
                    failure();
            }
        });
    };
    Token.prototype.uidToJSONString = function (uid) {
        return {
            "uid": uid
        };
    };
    Token.prototype.storeToken = function (token, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.setItem('token', token).then(function (token) {
            if (success)
                success(token);
        }).catch(function (e) {
            if (failure)
                failure(e);
        });
    };
    Token.prototype.getToken = function (success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.getItem('token').then(function (token) {
            if (token)
                success(token);
        }).catch(function (e) {
            if (failure)
                failure(e);
        });
    };
    Token.prototype.unStoreToken = function (id, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.remove('token').then(function (token) {
            if (success)
                success(token);
        }).catch(function (e) {
            if (failure)
                failure(e);
        });
    };
    Token.prototype.isOutdated = function (time) {
        return time - Date.now() <= 86400000;
    };
    Token.prototype.getUUID = function (success, failure) {
        var _this = this;
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.uniqueDeviceID.get().then(function (uuid) {
            if (success)
                success(uuid != null ? uuid : _this.TEMPLATE_UUID);
        }).catch(function (e) {
            if (failure)
                failure(e);
        });
    };
    return Token;
}());
Token = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, NativeStorage, UniqueDeviceID])
], Token);
export { Token };
//# sourceMappingURL=token.js.map