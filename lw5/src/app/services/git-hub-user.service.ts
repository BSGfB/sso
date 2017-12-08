import {Injectable} from '@angular/core';
import {UserService} from './user-service';
import {Observable} from 'rxjs/Observable';
import {ContactInfo, Info, User} from '../models';
import {Http} from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GitHubUserService implements UserService {
  private url = 'https://api.github.com/users/';

  constructor(private http: Http) { }

  findByLogin(login: string): Observable<User> {
    return this.http.get(this.url + login).map(response => {
      return this.userRowMapper(response.json());
    });
  }

  private userRowMapper(jsonObject: any): User {
    const info = new Info(jsonObject.name, jsonObject.login, jsonObject.bio);
    const contactInfo = new ContactInfo(jsonObject.email, jsonObject.site, jsonObject.location, jsonObject.blog);
    return new User(jsonObject.id, jsonObject.avatar_url, info, contactInfo);
  }
}
