import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftSideComponent} from './left-side/left-side.component';
import {RightSideComponent} from './right-side/right-side.component';
import { InfoComponent } from './info/info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ImageComponent } from './image/image.component';
import { IconTextComponent } from './icon-text/icon-text.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LeftSideComponent,
    RightSideComponent,
    InfoComponent,
    ContactInfoComponent,
    ImageComponent,
    IconTextComponent
  ],
  exports: [
    LeftSideComponent,
    RightSideComponent
  ]
})
export class ComponentsModule {
}
