/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UseCreateAccount } from './signupHook';

const Signup = ({ className = 'signup', id = 'signup' }) => {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(0);
  const [character, setCharacter] = useState('');
  const [image, setImage] = useState(1);

  const handleCreate = (e) => {
    setLoading(1);
    e.preventDefault();
    const values = e.target.elements;
    UseCreateAccount(
      values[0].value,
      values[1].value,
      values[2].value,
      setError,
      setLoading,
    );
    setSubmit(true);
  };

  const handleCharacter = (e) => {
    setLoading(1);
    e.preventDefault();
    console.log('to the profile');
  };

  const handleLeftClick = (e) => {
    e.preventDefault();
    setImage((prevImage) => (prevImage === 1 ? 3 : prevImage - 1));
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setImage((prevImage) => (prevImage === 3 ? 1 : prevImage + 1));
  };

  useEffect(() => {
    setCharacter(`../src/assets/character${image}.png`);
  }, [image]);

  return (
    <div className={className} id={id}>
      <h5 className={`${className}__title`} id={`${id}__title`}>athena</h5>
      <div className={`${className}__box`} id={`${id}__box`} />
      {submit
        ? (
          <>
            <div className={`${className}__controls`} id={`${id}__controls`}>
              <button className={`${className}__controls__left`} id={`${id}__controls__left`} type="button" onClick={handleLeftClick} aria-label="left" />
              <button className={`${className}__controls__right`} id={`${id}__controls__right`} type="button" onClick={handleRightClick} aria-label="right" />
            </div>
            <div className={`${className}__character`} id={`${id}__character`}>
              <img className={`${className}__character__img`} id={`${id}__character__img`} src={character} alt="" />
            </div>
            <div className={`${className}__continue`} id={`${id}__continue`}>
              {loading === 1 ? null : <Link className={`${className}__continue__button`} id={`${id}__continue__button`} onClick={handleCharacter} to="/profile">pick this starting character</Link>}
            </div>
          </>
        )
        : (
          <>
            <form className={`${className}__inputs`} id={`${id}__inputs`}>
              <input className={`${className}__inputs__username`} id={`${id}__inputs__username`} type="text" name="username" />
              <label className={`${className}__inputs__username__label`} id={`${id}__inputs__username__label`} htmlFor="username">username</label>
              <input className={`${className}__inputs__password`} id={`${id}__inputs__password`} type="text" name="password" />
              <label className={`${className}__inputs__password__label`} id={`${id}__inputs__password__label`} htmlFor="password">password</label>
              <input className={`${className}__inputs__confirm`} id={`${id}__inputs__confirm`} type="text" name="confirm" />
              <label className={`${className}__inputs__confirm__label`} id={`${id}__inputs__confirm__label`} htmlFor="confirm">confirm password</label>
              <input className={`${className}__inputs__email`} id={`${id}__inputs__email`} type="text" name="email" />
              <label className={`${className}__inputs__email__label`} id={`${id}__inputs__email__label`} htmlFor="email">email</label>
            </form>
            <div className={`${className}__back`} id={`${id}__back`}>
              <Link className={`${className}__back__button`} id={`${id}__back__button`} to="/" />
            </div>
            <div className={`${className}__continue`} id={`${id}__continue`}>
              {loading === 1 ? null : <button className={`${className}__continue__button`} id={`${id}__continue__button`} type="submit" onClick={handleCreate}>create account</button>}
            </div>
          </>
        )}
      {loading === 2 ? <p>{error}</p> : null}
    </div>
  );
};

export default Signup;

Signup.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
