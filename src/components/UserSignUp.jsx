import React from 'react';
import {useForm} from 'react-hook-form';

export default function UserSignUp() {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = data => {
    console.log(data);
    // e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>

      <label>First Name</label>
      <input name='firstName' ref={register({required: true, minLength: 2})} />
      {errors.firstName && errors.firstName.type === 'required' && (
        <p>First Name is required</p>
      )}
      {errors.firstName && errors.firstName.type === 'minLength' && (
        <p>This field need minmium 2 charcaters</p>
      )}

      <label>Last Name</label>
      <input type='text' name='lastName' ref={register({required: true})} />
      {errors.lastName && errors.lastName.type === 'required' && (
        <p>Last Name is required</p>
      )}

      <label>Gender</label>
      <select name='gender' ref={register({required: true})}>
        <option value=''>Select...</option>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
      </select>
      {errors.gender && errors.gender.type === 'required' && (
        <p>Gender is required</p>
      )}

      <label>Username</label>
      <input type='text' name='username' ref={register({required: true})} />
      {errors.username && errors.username.type === 'required' && (
        <p>Username is required</p>
      )}

      <label>Email</label>
      <input
        type='email'
        name='email'
        ref={register({
          required: true,
          pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        })}
      />
      {errors.email && errors.email.type === 'required' && (
        <p>Email is required</p>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <p>Email is not valid</p>
      )}

      <label>About you</label>
      <textarea
        name='aboutYou'
        ref={register()}
        style={{resize: 'none'}}
      ></textarea>

      <input type='submit' />
    </form>
  );
}
