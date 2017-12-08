import {GitHubUserService, UserService} from './services';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ComponentsModule} from './components/components.module';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {rootReducer, UserState} from './store/store';

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
    ComponentsModule,
    NgReduxModule
  ],
  providers: [{provide: UserService, useClass: GitHubUserService}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<UserState>, private userService: UserService) {
    ngRedux.configureStore(rootReducer, {user: undefined });
  }
}
