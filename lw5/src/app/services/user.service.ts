import { Injectable } from '@angular/core';
import {URLSearchParams, Headers, Http, Response} from '@angular/http';
import { User } from '../models/user';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {

  constructor(private http: Http) { }

  public getUser(): Observable<User> {
    return this.http.get('assets/static/data.json').map(response => response.json() as User);
  }
}
