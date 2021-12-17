import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import StreamForm from 'components/streams/StreamForm';
import { createStream } from 'actions';

const StreamCreate = ({ createStream }) => {
  const navigate = useNavigate();
  const { setValue } = useForm();

  const onSubmit = data => {
    console.log(data);

    createStream(data);
    setValue('title', '');
    setValue('description', '');
    navigate('/');
  };

  return <StreamForm onSubmit={onSubmit} />;
};

export default connect(null, { createStream })(StreamCreate);
