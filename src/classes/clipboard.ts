import { Injectable } from '@angular/core';

import { Clipboard as ClipboardClass } from '@ionic-native/clipboard';

@Injectable()
export class Clipboard {
	constructor(private clipboard:ClipboardClass) {}

	copy(text:string, success:any = null, failure:any = null) {
		this.clipboard.copy(text).then(() => {
			if (success) success();
		}).catch(() => {
			if (failure) failure();
		})
	}

	paste(success:any = null, failure:any = null) {
		this.clipboard.paste().then(() => {
			if (success) success();
		}).catch(() => {
			if (failure) failure();
		})
	}
}
