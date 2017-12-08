import {Observable} from 'rxjs/Observable';
import { User } from '../models';

export abstract class UserService {
    abstract findByLogin(login: string): Observable<User>;
}
