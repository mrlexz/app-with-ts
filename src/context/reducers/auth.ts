import {ActionType} from '../actions/actions.types';
import {AuthState} from '../initialStates/auth';

const auth = (
  state: AuthState,
  {type, payload}: ActionType<string, AuthState>,
) => {
  switch (type) {
    case 'LOGIN':
      return state;
    default:
      return state;
  }
};

export default auth;
