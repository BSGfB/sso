import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
