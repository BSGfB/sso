import { Http } from '@angular/http';
import { UserService } from './user-service';
import {Observable} from 'rxjs/Observable';
import { User } from '../models/user';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StaticUserService implements UserService {

  private dataFilePath = 'assets/static/data.json';

  constructor(private http: Http) { }

  findByLogin(login: string): Observable<User> {
    return this.http.get(this.dataFilePath).map(response => {
      const users = response.json() as User[];

      for (const user of users) {
        if (user.info.login === login) { return user; }
      }

      return null;
    });
  }
}
