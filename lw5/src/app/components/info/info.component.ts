import {Component, Input, OnInit} from '@angular/core';
import {Info} from '../../models';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() public info: Info;

  constructor() {
    this.info = new Info('Siarhei Blashuk', 'Nickname', 'Short bio');
  }

  ngOnInit() {
  }
}
