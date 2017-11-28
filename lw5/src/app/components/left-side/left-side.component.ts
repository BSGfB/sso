import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  user: User;

  constructor(private userSerivce: UserService) {
    this.userSerivce.getUser().subscribe(user => {
      this.addLogUser(user);
      this.user = user;
    });
  }

  ngOnInit() {
  }

  addLogUser(user): void {
    console.log('Found user: ');
    console.log(user);
  }
}
