import {Component, Input, OnInit} from '@angular/core';
import {TextType} from '../../models/text-type.enum';

@Component({
  selector: 'app-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.css']
})
export class IconTextComponent implements OnInit {
  @Input() public type: TextType;
  @Input() public icon: string;
  @Input() public text: string;

  public textType = TextType;

  constructor() {
    this.text = '';
    this.icon = '';

  }

  ngOnInit() {
  }
}
