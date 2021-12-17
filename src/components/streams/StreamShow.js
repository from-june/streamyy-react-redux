import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream } from 'actions';

const StreamShow = ({ fetchStream, stream }) => {
  const { id } = useParams();
  const { title, description } = stream[id];

  useEffect(() => {
    fetchStream(id);
  }, [fetchStream, id]);

  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

const mapStateToProps = state => {
  return { stream: state.streams };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
