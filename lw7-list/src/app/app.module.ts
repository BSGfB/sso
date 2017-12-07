import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';

import {AppComponent} from './app.component';
import {rootReducer, UserListState} from '../store/store';
import {ComponentsModule} from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<UserListState>) {
    ngRedux.configureStore(rootReducer, {user: undefined });
  }
}
