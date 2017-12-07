import {Component, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {UserListState} from '../../../store/store';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

  constructor(private ngRedux: NgRedux<UserListState>, public fb: FormBuilder) {}

  ngOnInit() {
  }

  addItem() {
    console.log('addItem()');

    this.ngRedux.dispatch({
      type: 'ADD_USER',
      user: new User(this.userForm.controls.firstName.value, this.userForm.controls.lastName.value)
    });
  }
}
