import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { NativeStorage } from '@ionic-native/native-storage';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

@Injectable()
export class Token {
	TEMPLATE_UUID:string = 'DEV_UUID_TEMPLATE';
	PARSEGATO_AUTH:string = 'https://parsergato.herokuapp.com/auth';

	constructor(private http:Http, private nativeStorage:NativeStorage, private uniqueDeviceID: UniqueDeviceID) {}

	auth(uid:string, success:any = null, failure:any = null):any {
		console.log(`Calling auth with uid ${uid}`);
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers});
		this.http.post(this.PARSEGATO_AUTH, this.uidToJSONString(uid), options).map((res:Response) => res.json()).take(1).subscribe((res) => {
			if (res.token) {
				if (success) success(res);
			} else {
				if (failure) failure();
			}
		});
	}

	uidToJSONString(uid:string):any {
		return {
			"uid":uid
		};
	}

	storeToken(token:any, success:any = null, failure:any = null):void {
            this.nativeStorage.setItem('token', token).then((token) => {
                  if (success) success(token);
            }).catch((e)=>{
			if (failure) failure(e);
            });
      }

      getToken(success:any = null, failure:any = null):void {
            this.nativeStorage.getItem('token').then((token) => {
                  if (token) success(token);
            }).catch((e) => {
                  if (failure) failure(e);
            });
      }

      unStoreToken(id:number, success:any = null, failure:any = null):void {
		this.nativeStorage.remove('token').then((token) => {
                  if (success) success(token);
            }).catch((e) => {
                  if (failure) failure(e);
            });
      }

	isOutdated(time:number):boolean {
		return time - Date.now() <= 86400000;
	}

	getUUID(success:any = null, failure:any = null) {
		this.uniqueDeviceID.get().then((uuid) => {
			if (success) success(uuid != null ? uuid : this.TEMPLATE_UUID);
		}).catch((e) => {
			if (failure) failure(e);
		});
	}
}
