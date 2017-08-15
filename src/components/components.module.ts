import { NgModule } from '@angular/core';
import { LivecardComponent } from './livecard/livecard';
import { EditablecardComponent } from './editablecard/editablecard';
import { ArigatobuttonComponent } from './arigatobutton/arigatobutton';
import { AvatarComponent } from './avatar/avatar';
@NgModule({
	declarations: [ArigatobuttonComponent,
    LivecardComponent,
    EditablecardComponent,
    ArigatobuttonComponent,
    AvatarComponent],
	imports: [],
	exports: [ArigatobuttonComponent,
    LivecardComponent,
    EditablecardComponent,
    ArigatobuttonComponent,
    AvatarComponent]
})
export class ComponentsModule {}
