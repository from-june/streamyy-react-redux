import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from 'actions';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const CLIENT_ID =
    '881346259084-erq8nkljtfj250q58erf3i0dcj18devj.apps.googleusercontent.com';
  const { gapi } = window;

  const auth = useRef(null);

  gapi.load('client:auth2', () => {
    gapi.client
      .init({
        clientId: CLIENT_ID,
        scope: 'email'
      })
      .then(() => {
        auth.current = gapi.auth2.getAuthInstance();
        onAuthChange(auth.current.isSignedIn.get());
        auth.current.isSignedIn.listen(onAuthChange);
      });
  });

  const onAuthChange = isSignedIn => {
    if (isSignedIn) signIn(auth.current.currentUser.get().getId());
    else signOut();
  };

  const onSignInClick = () => auth.current.signIn();
  const onSignOutClick = () => auth.current.signOut();

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return (
        <button className="ui google button">
          <i className="google icon" />
        </button>
      );
    }

    if (isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui google button green">
          <i className="google icon" />
          Sign out
        </button>
      );
    }

    if (!isSignedIn) {
      return (
        <button onClick={onSignInClick} className="ui google button green">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  };

  return renderAuthButton();
};

const mapToStateProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapToStateProps, { signIn, signOut })(GoogleAuth);
