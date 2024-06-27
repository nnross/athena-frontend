/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { UseCreateAccount, UseCheckUsername, UseCheckEmail } from './signupHook';

const Signup = ({ className = 'signup', id = 'signup' }) => {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(0);
  const [character, setCharacter] = useState('');
  const [image, setImage] = useState(1);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [disabled, setDisabled] = useState(true);
  const [wrongUsername, setWrongUsername] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [wrongConfirmPassword, setWrongConfirmPassword] = useState(false);

  const [usernameTaken, setUsernameTaken] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);

  const usernameRegex = /^(?=.{4,20})/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const emailRegex = /^(?=.[\w-.]+@([\w-]+\.)+[\w-]{2,4}$)/;

  /**
   * Checks that the password matches confirm password and username,
   * password and name are in the correct form.
   */
  useEffect(() => {
    setWrongUsername(usernameRegex.test(username) === false && username !== '');
    setWrongEmail(emailRegex.test(email) === false && email !== '');
    setWrongPassword(passwordRegex.test(password) === false && password !== '');
    setWrongConfirmPassword(confirmPassword !== password);

    if (usernameRegex.test(username) === false
      || passwordRegex.test(password) === false
      || confirmPassword !== password
      || [username, email, password, confirmPassword].includes('')) setDisabled(true);
    else setDisabled(false);
  }, [username, email, password, confirmPassword]);

  const checkUsername = () => {
    if (!wrongUsername) {
      UseCheckUsername(username, setUsernameTaken, setError, setLoading);
      if (usernameTaken) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  };

  const checkEmail = () => {
    if (!wrongEmail) {
      UseCheckEmail(email, setEmailTaken, setError, setLoading);
      if (emailTaken) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  };

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
    e.preventDefault();
    navigate('/profile');
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
              {loading === 1 ? null : <button className={`${className}__continue__button`} id={`${id}__continue__button`} onClick={handleCharacter} type="button">pick this starting character</button>}
            </div>
          </>
        )
        : (
          <>
            <form className={`${className}__inputs`} id={`${id}__inputs`} onSubmit={handleCreate}>
              <input className={`${className}__inputs__username`} id={`${id}__inputs__username`} type="text" name="username" onChange={(e) => setUsername(e.target.value)} onBlur={checkUsername} />
              <label className={`${className}__inputs__username__label`} id={`${id}__inputs__username__label`} htmlFor="username">username</label>
              <input className={`${className}__inputs__email`} id={`${id}__inputs__email`} type="text" name="email" onChange={(e) => setEmail(e.target.value)} onBlur={checkEmail} />
              <label className={`${className}__inputs__email__label`} id={`${id}__inputs__email__label`} htmlFor="email">email</label>
              <input className={`${className}__inputs__password`} id={`${id}__inputs__password`} type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
              <label className={`${className}__inputs__password__label`} id={`${id}__inputs__password__label`} htmlFor="password">password</label>
              <input className={`${className}__inputs__confirm`} id={`${id}__inputs__confirm`} type="password" name="confirm" onChange={(e) => setConfirmPassword(e.target.value)} />
              <label className={`${className}__inputs__confirm__label`} id={`${id}__inputs__confirm__label`} htmlFor="confirm">confirm password</label>
            </form>
            { wrongUsername ? (
              <div className={`${className}__check`} id={`${id}__check`}>
                <p className={`${className}__check__text`}>
                  username needs to be at least 4 characters
                  long and shorther than 20 characters
                </p>
              </div>
            ) : null}
            { usernameTaken ? (
              <div className={`${className}__check`} id={`${id}__check`}>
                <p className={`${className}__check__text`}>
                  this username is already taken
                </p>
              </div>
            ) : null}
            { wrongEmail ? (
              <div className={`${className}__check`} id={`${id}__check`}>
                <p className={`${className}__check__text`}>
                  not an email address
                </p>
              </div>
            ) : null}
            { emailTaken ? (
              <div className={`${className}__check`} id={`${id}__check`}>
                <p className={`${className}__check__text`}>
                  this email is already used
                </p>
              </div>
            ) : null}
            { wrongPassword ? (
              <div className={`${className}__check`} id={`${id}__check`}>
                <ul className={`${className}__check__list`}>
                  password must include the following:
                  <li> min eight characters </li>
                  <li> one letter </li>
                  <li> one number </li>
                  <li> one special character </li>
                </ul>
              </div>
            ) : null}
            { !wrongPassword && wrongConfirmPassword ? (
              <div className={`${className}__check`} id={`${id}__check`}>
                <p className={`${className}__check__text`}>
                  passwords do not match
                </p>
              </div>
            ) : null}
            <div className={`${className}__back`} id={`${id}__back`}>
              <Link className={`${className}__back__button`} id={`${id}__back__button`} to="/" />
            </div>
            <div className={`${className}__continue`} id={`${id}__continue`}>
              {loading === 1 ? null : <button className={`${className}__continue__button`} id={`${id}__continue__button`} type="submit" form={`${id}__inputs`} disabled={disabled}>create account</button>}
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
