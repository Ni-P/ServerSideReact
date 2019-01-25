import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.log('fetching users');

      return action.payload.data;
    default:
      return state;
  }
};
