import { GET_TIMELINE_USER_ID, GET_USER_PIC } from './types';

import axios from 'axios';

export const getTimeline = formValues => async dispatch => {
  var params = { screen_name: formValues.screen_name, count: formValues.count };
  let response = await axios.get(
    `${process.env.REACT_APP_SERVER}/twitter/timeline`,
    { params }
  );
  dispatch({ type: GET_TIMELINE_USER_ID, payload: response.data });
};

export const getUserPic = screenName => async dispatch => {
  var params = { screen_name: screenName };
  let response = await axios.get(
    `${process.env.REACT_APP_SERVER}/twitter/pic`,
    { params }
  );
  dispatch({ type: GET_USER_PIC, payload: response.data });
};
