import {Component, Input, OnInit} from '@angular/core';
import {ContactInfo, TextType} from '../../models';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input() public info: ContactInfo;

  public textType = TextType;

  constructor() {
    this.info = new ContactInfo('Bob@email.com', 'https://bob.com', 'Brest', '@facebook');
  }

  ngOnInit(): void {
  }
}
