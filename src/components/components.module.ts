import { NgModule } from '@angular/core';
import { LivecardComponent } from './livecard/livecard';
import { EditablecardComponent } from './editablecard/editablecard';
import { ArigatobuttonComponent } from './arigatobutton/arigatobutton';
@NgModule({
	declarations: [ArigatobuttonComponent,
    LivecardComponent,
    EditablecardComponent,
    ArigatobuttonComponent],
	imports: [],
	exports: [ArigatobuttonComponent,
    LivecardComponent,
    EditablecardComponent,
    ArigatobuttonComponent]
})
export class ComponentsModule {}
