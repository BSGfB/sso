import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() text: string;
  @Input() isSwitchOn: boolean;
  @Output() switchClick = new EventEmitter<boolean>();

  constructor() {
    this.isSwitchOn = false;
  }

  ngOnInit() {}

  onSwitchCkick(event) {
    this.isSwitchOn = event.target.checked;
    this.switchClick.emit(this.isSwitchOn);
  }
}
