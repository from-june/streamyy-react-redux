import { SIGN_IN, SIGN_OUT } from 'actions';

export const authReducer = (state = { isSignedIn: null }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
