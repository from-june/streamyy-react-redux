import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from 'components/GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary menu" style={{ padding: '10px 0' }}>
      <Link to="/" className="header item">
        STREAMYY
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
