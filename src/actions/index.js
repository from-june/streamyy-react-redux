import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM_LIST,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAM
} from 'actions/types';
import { streams } from 'apis/streams';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValue => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const { data } = await streams.post('/streams', { ...formValue, userId });

  dispatch({ type: CREATE_STREAM, payload: data });
};

export const fetchStreamList = () => async dispatch => {
  const { data } = await streams.get('/streams');

  dispatch({ type: FETCH_STREAM_LIST, payload: data });
};

export const fetchStream = id => async dispatch => {
  const { data } = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: data });
};

export const editStream = (id, formValue) => async dispatch => {
  const { data } = await streams.put(`/streams/${id}`, formValue);

  dispatch({ type: EDIT_STREAM, payload: data });
};

export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
