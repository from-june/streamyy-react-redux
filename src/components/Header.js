import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from 'components/GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary menu">
      <Link to="/" className="header item">
        Streamyy
      </Link>
      <div className="right menu">
        <div className="item">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
