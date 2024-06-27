/* eslint-disable react/require-default-props */
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UseGetAccount } from './loginHook';

const Login = ({ className = 'login', id = 'login' }) => {
  const [loading, setLoading] = useState(0);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    setLoading(1);
    e.preventDefault();
    const values = e.target.elements;
    const form = document.getElementById(`${id}__inputs`);
    UseGetAccount(
      values[0].value,
      values[1].value,
      setError,
      setLoading,
      navigate,
      form,
      setDisabled,
    );
  };
  return (
    <div className={className} id={id}>
      <h5 className={`${className}__title`} id={`${id}__title`}>athena</h5>
      <div className={`${className}__box`} id={`${id}__box`} />
      <form className={`${className}__inputs`} id={`${id}__inputs`} onSubmit={handleLogin}>
        <input className={`${className}__inputs__username`} id={`${id}__inputs__username`} type="text" name="username" disabled={disabled} />
        <label className={`${className}__inputs__username__label`} id={`${id}__inputs__username__label`} htmlFor="username">username</label>
        <input className={`${className}__inputs__password`} id={`${id}__inputs__password`} type="password" name="password" disabled={disabled} />
        <label className={`${className}__inputs__password__label`} id={`${id}__inputs__password__label`} htmlFor="password">password</label>
      </form>
      <div className={`${className}__back`} id={`${id}__back`}>
        <Link className={`${className}__back__button`} id={`${id}__back__button`} to="/" />
      </div>
      <div className={`${className}__continue`} id={`${id}__continue`}>
        {loading === 1 ? null : <button className={`${className}__continue__button`} type="submit" form={`${id}__inputs`}>log in</button>}
      </div>
      {loading === 2 ? (
        <div className={`${className}__error`} id={`${id}__error`}>
          <p className={`${className}__error__text`} id={`${id}__error__text`}>{error}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Login;

Login.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
