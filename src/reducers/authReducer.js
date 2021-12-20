import { createReducer } from '@reduxjs/toolkit';
import { signIn, signOut } from 'actions';

const INIT_STATE = {
  isSignedIn: null,
  userId: null
};

export const authReducer = createReducer(INIT_STATE, {
  [signIn]: (state, action) => {
    return { ...state, isSignedIn: true, userId: action.payload };
  },
  [signOut]: state => {
    return { ...state, isSignedIn: false, userId: null };
  }
});
