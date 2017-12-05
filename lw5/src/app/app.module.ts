import { UserService } from './services/user-service';
import { StaticUserService } from './services/static-user.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule
  ],
  providers: [{provide: UserService, useClass: StaticUserService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
