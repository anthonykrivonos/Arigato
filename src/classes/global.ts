import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

import { Observable } from 'rxjs';

@Injectable()
export class Global {
      constructor(public events:Events) {}

      event(name:string, callback:any = null) {
            callback ? this.events.subscribe(name, () => callback()) : this.events.publish(name);
      }

      home(option:string, callback:any = null):void {this.event(`home:${option}`, callback);}

      button(option:string, callback:any = null):void {this.event(`button:${option}`, callback);}

      storage(option:string, callback:any = null):void {this.event(`storage:${option}`, callback);}

      logger(option:string, callback:any = null):void {this.event(`logger:${option}`, callback);}

      editablecard(option:string, callback:any = null):void {this.event(`editablecard:${option}`, callback);}

      livecard(option:string, callback:any = null):void {this.event(`livecard:${option}`, callback);}

      slides(option:string, callback:any = null):void {this.event(`slides:${option}`, callback);}
}
