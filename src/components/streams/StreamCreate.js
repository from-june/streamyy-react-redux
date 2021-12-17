import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStream } from 'actions';
import { useForm } from 'react-hook-form';

const StreamCreate = ({ createStream }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const onSubmit = data => {
    console.log(data);

    createStream(data);
    setValue('title', '');
    setValue('description', '');
    navigate('/');
  };

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <div className={`field ${errors.title ? 'error' : ''}`}>
        <label htmlFor="title">Enter Title</label>
        <input
          id="title"
          {...register('title', {
            required: true
          })}
        />
        {errors.title && (
          <p className="ui pointing red basic label">Please enter a title.</p>
        )}
      </div>
      <div className={`field ${errors.description ? 'error' : ''}`}>
        <label htmlFor="description">Enter Description</label>
        <input
          id="description"
          {...register('description', { required: true })}
        />
        {errors.description && (
          <p className="ui pointing red basic label">
            Please enter a description.
          </p>
        )}
      </div>
      <button className="ui button">Submit</button>
    </form>
  );
};

export default connect(null, { createStream })(StreamCreate);
