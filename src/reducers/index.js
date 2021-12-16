import { combineReducers } from 'redux';
import { authReducer } from 'reducers/authReducer';
import { streamReducer } from 'reducers/streamReducer';

export default combineReducers({
  auth: authReducer,
  streams: streamReducer
});
