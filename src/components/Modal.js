import React from 'react';
import ReactDOM from 'react-dom';

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="ui modals dimmer transition active">
      <div className="ui tiny modal transition visible active">
        <h3 className="header">Delete Stream</h3>
        <div className="content">Are you sure want to delete this stream?</div>
        <div className="actions">
          <button className="ui button inverted red">Delete</button>
          <button className="ui button inverted secondary">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
