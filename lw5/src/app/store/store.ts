import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';


export interface UserState {
  user: Observable<User>;
}

export function rootReducer(state, action) {
  switch (action.type) {
    case 'SHOW_USER': return {user: action.user};
  }

  return state;
}
