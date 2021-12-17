import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import StreamForm from 'components/streams/StreamForm';
import { fetchStream, editStream } from 'actions';

const StreamEdit = ({ fetchStream, stream, editStream }) => {
  const { id } = useParams();
  const { title, description } = stream[id];
  const navigate = useNavigate();

  const onSubmit = data => {
    editStream(id, data);
    navigate('/');
  };

  useEffect(() => {
    fetchStream(id);
  }, []);

  return (
    <StreamForm title={title} description={description} onSubmit={onSubmit} />
  );
};

const mapStateToProps = state => {
  return { stream: state.streams };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
