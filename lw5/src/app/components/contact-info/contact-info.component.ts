import {Component, Input, OnInit} from '@angular/core';
import {ContactInfo} from '../../models/contact-info';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  @Input()
  public info: ContactInfo;

  constructor() {
    this.info = new ContactInfo('Bob@email.com', 'https://bob.com', 'Brest', '@facebook');
  }

  ngOnInit(): void {
  }
}
