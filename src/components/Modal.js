import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ onDismiss, actions, header, content }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui modals dimmer transition active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui tiny modal transition visible active"
      >
        <h3 className="header">{header}</h3>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
