import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() public text: string;
  @Input() public icon: string;
  @Input() public textColor: string;
  @Input() public backgroundColor: string;

  constructor() {
    this.text = 'button';
    this.icon = 'cloud';
    this.textColor = 'black';
    this.backgroundColor = 'white';
  }

  ngOnInit() {  
  }
}
