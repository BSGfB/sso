import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';
import {NgRedux} from '@angular-redux/store';
import {UserState} from '../../store/store';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  user: User;

  constructor(private userSerivce: UserService, private ngRedux: NgRedux<UserState>) {
    // this.userSerivce.findByLogin('BSGfB').subscribe(user => {
    //   this.addLogUser(user);
    //   this.user = user;
    // });
  }

  ngOnInit() {
    this.ngRedux.subscribe(() => {
      this.ngRedux.getState().user.subscribe(user => {
        this.addLogUser(user);
        this.user = user;
      });
    });
  }

  addLogUser(user): void {
    console.log('Found user: ');
    console.log(user);
  }
}
