import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { timelineReducer, userPicReducer } from './timelineReducer';

export default combineReducers({
  timeline: timelineReducer,
  form: formReducer, //form is a keyword for the npm package redux-form

  userPic: userPicReducer
});
