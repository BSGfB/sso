import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']
})
export class LeftSideComponent implements OnInit {
  user: User;

  constructor(private userSerivce: UserService) {
    this.userSerivce.findByLogin('BSGfB').subscribe(user => {
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
