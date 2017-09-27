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
import { NativeStorage } from '@ionic-native/native-storage';
var Config = (function () {
    function Config(nativeStorage) {
        this.nativeStorage = nativeStorage;
        this.DEFAULT_CONFIG = {
            vibrateOnAlert: true,
            overwriteOnRecord: true,
            saveAvatarsToAlbum: true,
            clearContactOnSave: false,
            deleteContactOnAdd: false,
            sortBy: "dateCreated"
        };
    }
    Config.prototype.update = function (key, value, success, failure) {
        var _this = this;
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.load(function (config) {
            config[key] = value;
            _this.save(config, function (conf) {
                if (success)
                    success(conf);
            }, function (e) {
                if (failure)
                    failure(e);
            });
        }, function (e) {
            if (failure)
                failure(e);
        });
    };
    Config.prototype.get = function (key, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.load(function (config) {
            if (success && config[key])
                success(config[key]);
            else if (failure)
                failure();
        }, function (e) {
            if (failure)
                failure(e);
        });
    };
    Config.prototype.save = function (config, success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.setItem('config', config).then(function (conf) {
            if (success)
                success(conf);
        }).catch(function (e) {
            if (failure)
                failure(e);
        });
    };
    Config.prototype.reset = function (success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.setItem('config', this.DEFAULT_CONFIG).then(function (config) {
            if (success)
                success(config);
        }).catch(function (e) {
            if (failure)
                failure(e);
        });
    };
    Config.prototype.load = function (success, failure) {
        var _this = this;
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.getItem('config').then(function (config) {
            if (success)
                success(config);
        }).catch(function (e) {
            _this.reset(function (resetted) {
                if (success)
                    success(resetted);
            }, function (er) {
                if (failure)
                    failure(er);
            });
        });
    };
    Config.prototype.delete = function (success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.nativeStorage.remove('config').then(function (config) {
            if (success)
                success(config);
        }).catch(function (e) {
            if (failure)
                failure(e);
        });
    };
    return Config;
}());
Config = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NativeStorage])
], Config);
export { Config };
//# sourceMappingURL=config.js.map