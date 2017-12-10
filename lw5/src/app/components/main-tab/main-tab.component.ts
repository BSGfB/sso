import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent implements OnInit {
  isReadonly = true;

  constructor() { }

  ngOnInit() {
  }

  onSwitchClick(switchStatus: boolean) {
    this.isReadonly = !switchStatus;
  }
}
