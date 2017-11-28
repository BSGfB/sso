import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeftSideComponent} from './left-side/left-side.component';
import {RightSideComponent} from './right-side/right-side.component';
import { InfoComponent } from './info/info.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ImageComponent } from './image/image.component';
import { IconTextComponent } from './icon-text/icon-text.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonComponent } from './button/button.component';
import { MainTabComponent } from './main-tab/main-tab.component';

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
    IconTextComponent,
    TabComponent,
    TabsComponent,
    ButtonComponent,
    MainTabComponent
  ],
  exports: [
    LeftSideComponent,
    RightSideComponent
  ]
})
export class ComponentsModule {
}
