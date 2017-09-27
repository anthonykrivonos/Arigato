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
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { Speech } from '../classes/speech';
import { Token } from '../classes/token';
import { Toast } from '../classes/toast';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, speech, token, toast) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.speech = speech;
        this.token = token;
        this.toast = toast;
        this.rootPage = HomePage;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            speech.requestPermission();
            _this.updateToken(function () {
                _this.toast.showToast("Parser token created!");
            }, function () {
                _this.toast.showToast("Couldn't create a parser token.");
            });
            console.log("app:Fully loaded.");
        }).catch();
    }
    MyApp.prototype.updateToken = function (success, failure) {
        var _this = this;
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        this.token.getToken(function (token) {
            if (_this.token.isOutdated(token)) {
                _this.token.getUUID(function (uuid) {
                    _this.token.auth(uuid, function (newToken) {
                        _this.token.storeToken(newToken, function () {
                            if (success)
                                success(newToken);
                        }, function () {
                            if (failure)
                                failure();
                        });
                    }, function () {
                        if (failure)
                            failure();
                    });
                });
            }
        }, function () {
            _this.token.getUUID(function (uuid) {
                _this.token.auth(uuid, function (token) {
                    _this.token.storeToken(token, function () {
                        if (success)
                            success(token);
                    }, function () {
                        if (failure)
                            failure();
                    });
                }, function () {
                    if (failure)
                        failure();
                });
            }, function () {
                if (failure)
                    failure();
            });
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Component({
        templateUrl: 'app.html'
    }),
    __metadata("design:paramtypes", [Platform, StatusBar, SplashScreen, Speech, Token, Toast])
], MyApp);
export { MyApp };
//# sourceMappingURL=app.component.js.map