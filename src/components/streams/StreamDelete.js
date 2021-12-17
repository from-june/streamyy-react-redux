import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'components/Modal';
import { fetchStream, deleteStream } from 'actions';

const StreamDelete = ({ stream, fetchStream, deleteStream }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { title } = stream[id];

  const onDismiss = () => navigate('/');
  const onDeleteStreamClick = () => {
    deleteStream(id);
    onDismiss();
  };
  const actions = (
    <>
      <button onClick={onDeleteStreamClick} className="ui button inverted red">
        Delete
      </button>
      <Link to="/" className="ui button inverted secondary">
        Cancel
      </Link>
    </>
  );

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  const renderContent = () => {
    if (!stream) {
      return 'Are you sure want to delete this stream?';
    }

    return `Are you sure want to delete title: ${title}`;
  };

  return (
    <Modal
      onDismiss={onDismiss}
      actions={actions}
      header="Delete Stream"
      content={renderContent()}
    />
  );
};

const mapStateToProps = state => {
  return { stream: state.streams };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
