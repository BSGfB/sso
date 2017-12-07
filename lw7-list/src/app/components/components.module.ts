import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserItemComponent} from './user-item/user-item.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [UserListComponent, UserFormComponent, UserItemComponent],
  exports: [UserListComponent, UserFormComponent, UserItemComponent]
})
export class ComponentsModule { }
