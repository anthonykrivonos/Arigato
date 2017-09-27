import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class Parser {
	PARSEGATO_PARSE:string = 'https://parsergato.herokuapp.com/parse';

	constructor(private http:Http) {}

	parse(text:string, token:string, contact:any = null, overwrite:any = null):any {
		let headers = new Headers({'Content-Type': 'application/json', 'x-access-token': token});
		let options = new RequestOptions({headers});
		this.http.post(this.PARSEGATO_PARSE, this.textToJSONString(text), options).map((res:Response) => res.json()).take(1).subscribe((res) => {
			if (res.parsed_text) {
				return overwrite == true ? this.overwriteContact(res.parsed_text, contact) : this.updateContact(res.parsed_text, contact);
			} else {
				return contact;
			}
		});
	}

	textToJSONString(text:string):any {
		return JSON.stringify({
			text
		});
	}

	overwriteContact(parsedContact:any, contact:any = null) {
		if (contact == null) return parsedContact;
		return {
			first_name: parsedContact.first_name || contact.first_name,
			last_name: parsedContact.last_name || contact.last_name,
			company: parsedContact.company || contact.company,
			email: parsedContact.email || contact.email,
			phone: parsedContact.phone || contact.phone,
			picture: contact.picture || null,
			notes: parsedContact.notes || contact.notes,
		};
	}

	updateContact(parsedContact:any, contact:any = null) {
		if (contact == null) return parsedContact;
		return {
			first_name: contact.first_name || parsedContact.first_name,
			last_name: contact.last_name || parsedContact.last_name,
			company: contact.company || parsedContact.company,
			email: contact.email || parsedContact.email,
			phone: contact.phone || parsedContact.phone,
			picture: contact.picture || null,
			notes: contact.notes || parsedContact.notes,
		};
	}
}
