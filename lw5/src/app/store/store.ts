import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';
import {StoreState} from '../models/store-state.enum';

export interface UserState {
  user: Observable<User>;
}

export function rootReducer(state, action) {
  switch (action.type) {
    case StoreState.SHOW_USER: return {user: action.user};
  }

  return state;
}
