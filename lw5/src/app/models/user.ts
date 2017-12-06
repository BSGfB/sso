import {ContactInfo} from './contact-info';
import {Info} from './info';

export class User {
  constructor (
    public id: number,
    public img: string,
    public info: Info,
    public contactInfo: ContactInfo
  ) {}
}
