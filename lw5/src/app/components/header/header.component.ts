import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {UserState} from '../../store/store';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  constructor(private ngRedux: NgRedux<UserState>, private userSerivce: UserService) { }

  ngAfterViewInit(): void {
    this.ngRedux.dispatch({
      type: 'SHOW_USER',
      user: this.userSerivce.findByLogin('BSGfB')
    });
  }

  onEnter(event) {
    this.ngRedux.dispatch({
      type: 'SHOW_USER',
      user: this.userSerivce.findByLogin(event.target.value)
    });

    event.target.value = '';
  }
}
