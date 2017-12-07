import {User} from '../app/model/user';

export interface UserListState {
  user: User;
}

export function rootReducer(state, action) {
  console.log('state and action: ');
  console.log(state);
  console.log(action);

  switch (action.type) {
    case 'ADD_USER': return {user: action.user}
  }

  return state;
}
