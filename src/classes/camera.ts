import { Injectable } from '@angular/core';
import { Camera as CameraClass, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class Camera {
      constructor(private camera: CameraClass) {}

      getPicture(success:any = null, failure:any = null):void {
            const options: CameraOptions = {
                  quality: 75,
                  destinationType: this.camera.DestinationType.FILE_URI,
                  encodingType: this.camera.EncodingType.JPEG,
                  mediaType: this.camera.MediaType.PICTURE,
                  allowEdit: true,
                  saveToPhotoAlbum: true
            }
            this.camera.getPicture(options).then((link) => {
                  if (success) success(link);
                  console.log("camera: Camera got link: " + link + ".");
            }, (e) => {
                  if (failure) failure(e);
                  console.log("camera: Camera closed or not working.");
            });
      }
}
