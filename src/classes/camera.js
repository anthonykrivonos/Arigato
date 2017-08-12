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
import { Camera as CameraClass } from '@ionic-native/camera';
var Camera = (function () {
    function Camera(camera) {
        this.camera = camera;
    }
    Camera.prototype.getPicture = function (success, failure) {
        if (success === void 0) { success = null; }
        if (failure === void 0) { failure = null; }
        var options = {
            quality: 75,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            saveToPhotoAlbum: false
        };
        this.camera.getPicture(options).then(function (link) {
            if (success)
                success(link);
            console.log("camera: Camera got link: " + link + ".");
        }, function (e) {
            if (failure)
                failure(e);
            console.log("camera: Camera closed or not working.");
        });
    };
    return Camera;
}());
Camera = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CameraClass])
], Camera);
export { Camera };
//# sourceMappingURL=camera.js.map