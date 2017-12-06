import {UserService} from './services/user-service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {GitHubUserService} from './services/git-hub-user.service';

/**
 * Available user services:
 * 1. StaticUserService - static user data? witch loaded from data.json file
 * 2. GitHubUserService - loads data from https://api.github.com/users/:login
 */
@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule
  ],
  providers: [{provide: UserService, useClass: GitHubUserService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
