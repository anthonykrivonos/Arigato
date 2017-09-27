import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class Config {
      constructor(private nativeStorage: NativeStorage) {}

      DEFAULT_CONFIG:any = {
            vibrateOnAlert: true,
            overwriteOnRecord: true,
            saveAvatarsToAlbum: true,
            clearContactOnSave: false,
            deleteContactOnAdd: false,
            sortBy: "dateCreated"
      }

      update(key:string, value:any, success:any = null, failure:any = null):void {
            this.load((config) => {
                  config[key] = value;
                  this.save(config, (conf) => {
                        if (success) success(conf);
                  }, (e) => {
                        if (failure) failure(e);
                  });
            }, (e) => {
                  if (failure) failure(e);
            });
      }

      get(key:string, success:any = null, failure:any = null):void {
            this.load((config) => {
                  if (success && config[key]) success(config[key]);
                  else if (failure) failure();
            }, (e) => {
                  if (failure) failure(e);
            });
      }

      save(config:any, success:any = null, failure:any = null):void {
            this.nativeStorage.setItem('config', config).then((conf) => {
                  if (success) success(conf);
            }).catch((e)=>{
			if (failure) failure(e);
            });
      }

      reset(success:any = null, failure:any = null):void {
            this.nativeStorage.setItem('config', this.DEFAULT_CONFIG).then((config) => {
                  if (success) success(config);
            }).catch((e)=>{
			if (failure) failure(e);
            });
      }

      load(success:any = null, failure:any = null):void {
            this.nativeStorage.getItem('config').then((config) => {
                  if (success) success(config);
            }).catch((e) => {
                  this.reset((resetted) => {
                        if (success) success(resetted);
                  }, (er) => {
                        if (failure) failure(er);
                  });
            });
      }

      delete(success:any = null, failure:any = null):void {
		this.nativeStorage.remove('config').then((config) => {
                  if (success) success(config);
            }).catch((e) => {
                  if (failure) failure(e);
            });
      }
}
