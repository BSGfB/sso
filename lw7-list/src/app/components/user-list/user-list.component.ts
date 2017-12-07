import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserListState} from '../../../store/store';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users: User[];

  constructor(private ngRedux: NgRedux<UserListState>) {
    this.users = [new User('Bob', 'Gun'), new User('Siarhei', 'Blashuk')]
  }

  ngOnInit() {
    this.ngRedux.subscribe(() => {
      this.users.push(this.ngRedux.getState().user)
    });
  }

}
