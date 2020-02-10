import { GET_TIMELINE_USER_ID, GET_USER_PIC } from '../actions/types';

const timelineReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TIMELINE_USER_ID:
      return Object.assign({}, action.payload);
    default:
      return Object.assign({}, state);
  }
};

const userPicReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_PIC:
      return Object.assign({}, action.payload);
    default:
      return Object.assign({}, state);
  }
};

export { timelineReducer, userPicReducer };
