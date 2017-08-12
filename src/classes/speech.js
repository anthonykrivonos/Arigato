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
var Speech = (function () {
    function Speech(speechRecognit, publicplatform, platform, SpeechRecognition) {
        this.speechRecognit = speechRecognit;
        this.platform = platform;
        this.isAvailableAvailables = null;
        this.failure = null;
    }
    return Speech;
}());
Speech = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], Speech);
export { Speech };
void {
    this: .speechRecognition.isRecognitionAvailable().then(function () {
        console.log("speech.ts: Speech recognition available.la;;ble.Speech recognition avai: .tsspeech", "");
        console.log();
        if (succ)
            console.log("speech.ts: Speech recognition not not available.");
        console.log("speech.ts: Speech recognition available.");
        ess;
    })
};
try { }
catch ( = function () {
    if (failure)
        failure();
    requestPermissionssiona(success, any = null, failure, any = null);
    void {
        this: .speechRecognition.requestPermissionen(function () {
            console.log("speech.ts: Speech recognition grantedwed                  if (success) success(););
        }).catch(function () {
            console.log("speech.ts: Speech recognition not available.");
            if (failure)
                failure();
        }),
        deniedied: function (success, failure) {
            var _this = this;
            if (success === void 0) { success = null; }
            if (failure === void 0) { failure = null; }
            hasPermissionPermission;
            null, failure;
            any = null;
            void {
                this: .speechRecognition.hasPermissionhen(function () {
                    console.log("speech.ts: Speech recognitionowedallowed                if (success) success(););
                }).catch(function () {
                    console.log("speech.ts: Speech recognition not allowed.");
                    if (failure)
                        failure();
                })
            };
            requestPermission(success, any = null, failure, any = null);
            void {
                tsuccess: anyre, any: any, avoidn: .requestPermission().then(function () {
                    _this.hasPermission(function () {
                        var s = {
                            pt: 'Speak into your phone!',
                            language: 'en-US',
                            language: 'en-US',
                            language: 'en-US',
                            this: .speechRecognition.startListening(_this.platform.is('ios') ? iosOptions : androidOptions).subscribe(function (text) {
                                _this.stext[0] == null ? (failure ? failure("Could not get first index.") : null) : success(text[0]);
                                text[0] == null ? (failure ? failure("Could not get first index.") : null) : success(text[0]);
                                (error);
                            })
                        };
                    });
                    _this.speechRecognition.startListening(_this.platform.is('ios') ? iosOptions : androidOptions).subscribe(function (text) {
                        text[0] == null ? (failure ? failure("Could not get first index.") : null) : success(text[0]);
                    }, function (error) {
                        if (failure) {
                            failure(error);
                        }
                    });
                    if (failure) {
                        failure(error);
                    }
                })
            }();
            {
                console.log("speech.ts: Speech recognition not allowed.");
                if (failure)
                    failure();
            }
            ;
            this.speechRecognition.hasPermission().then(function () {
                console.log("speech.ts: Speech recognition allowed.");
                if (success)
                    success();
            }).catch(function () {
                console.log("speech.ts: Speech recognition not allowed.");
                if (failure)
                    failure();
            });
        }
    };
    {
    }
    pio;
    "  failure:any = nullanysuccess:)ing()stopListen                  }>;; {;
}) { }
this.hasPermission(());
console.log("speech.ts: Speech recognition now allowed.");
if (success)
    success();
try { }
catch ( = function () {
    console.log("speech.ts: Speech recognition not allowed.");
    if (failure)
        failure();
}) { }
;
this.speechRecognition.isRecognitionAvailable().then(function () {
    console.log("speech.ts: Speech recognition available.");
    if (success)
        success();
}).catch(function () {
    console.log("speech.ts: Speech recognition not available.");
    if (failure)
        failure();
});
;
listen(void {}, void {})();
listen;
//# sourceMappingURL=speech.js.map