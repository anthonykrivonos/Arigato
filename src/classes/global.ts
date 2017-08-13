import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

import { Observable } from 'rxJS';

@Injectable()
export class Global {
      constructor(public events:Events) {}

      event(name:string, callback:any = null) {
            callback ? this.events.subscribe(name, () => callback()) : this.events.publish(name);
      }

      button(option:string, callback:any = null):void {this.event(`button:${option}`, callback);}

      storage(option:string, callback:any = null):void {this.event(`storage:${option}`, callback);}

      logger(option:string, callback:any = null):void {this.event(`logger:${option}`, callback);}

      livecard(option:string, callback:any = null):void {this.event(`logger:${option}`, callback);}

      slides(option:string, callback:any = null):void {this.event(`logger:${option}`, callback);}
}
