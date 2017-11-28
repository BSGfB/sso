import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {UserService} from './services/user.service';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
