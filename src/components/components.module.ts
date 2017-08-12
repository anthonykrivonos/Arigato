import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button';
import { LivecardComponent } from './livecard/livecard';
import { EditablecardComponent } from './editablecard/editablecard';
@NgModule({
	declarations: [ButtonComponent,
    LivecardComponent,
    EditablecardComponent],
	imports: [],
	exports: [ButtonComponent,
    LivecardComponent,
    EditablecardComponent]
})
export class ComponentsModule {}
