import {ActionType} from '../actions/actions.types';
import {ContactState} from '../initialStates/contact';

const contact = (
  state: ContactState,
  {type, payload}: ActionType<string, ContactState>,
) => {
  switch (type) {
    case 'GET_CONTACT':
      return {...state, loading: true};
    case 'GET_CONTACT_SUCCESS':
      return {...state, loading: false};
    case 'GET_CONTACT_FAILED':
      return {...state, loading: false};
    default:
      return state;
  }
};

export default contact;
