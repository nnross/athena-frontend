/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import {
  UseCreateAccount, UseCheckUsername, UseCheckEmail,
} from './signupHook';

const Signup = ({ className = 'signup', id = 'signup' }) => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(0);

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

  const [errorMsg, setErrorMsg] = useState('');
  const usernameWrongMsg = 'username needs to be at least 4 characters long and shorther than 20 characters';
  const usernameTakenMsg = 'this username is already taken';
  const emailWrongMsg = 'not an email address';
  const emailTakenMsg = 'this email is already used';
  const passwordWrongMsg = 'password must include the following: - min eight characters - one letter - one number - one special character';
  const confirmPasswordMsg = 'passwords do not match';

  const usernameRegex = /^(?=.{4,20})/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const emailRegex = /^(?=.[\w-.]+@([\w-]+\.)+[\w-]{2,4}$)/;

  /**
   * Checks that the password matches confirm password and username,
   * password and name are in the correct form.
   */
  useEffect(() => {
    if (usernameRegex.test(username) === false && username !== '') {
      setErrorMsg(usernameWrongMsg);
    } else if (emailRegex.test(email) === false && email !== '') {
      setErrorMsg(emailWrongMsg);
    } else if (passwordRegex.test(password) === false && password !== '') {
      setErrorMsg(passwordWrongMsg);
    } else if (confirmPassword !== password) {
      setErrorMsg(confirmPasswordMsg);
    } else if (usernameTaken) {
      setErrorMsg(usernameTakenMsg);
    } else if (emailTaken) {
      setErrorMsg(emailTakenMsg);
    } else {
      setErrorMsg('');
    }

    setWrongUsername(usernameRegex.test(username) === false && username !== '');
    setWrongEmail(emailRegex.test(email) === false && email !== '');
    setWrongPassword(passwordRegex.test(password) === false && password !== '');
    setWrongConfirmPassword(confirmPassword !== password);

    if (usernameRegex.test(username) === false
      || passwordRegex.test(password) === false
      || confirmPassword !== password
      || [username, email, password, confirmPassword].includes('')) setDisabled(true);
    else setDisabled(false);
  }, [username, email, password, confirmPassword, usernameTaken, emailTaken]);

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
    navigate('/signup/character');
  };

  return (
    <div className={className} id={id}>
      <h5 className={`${className}__title`} id={`${id}__title`}>athena</h5>
      <div className={`${className}__box`} id={`${id}__box`} />
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
      <div className={`${className}__check`} id={`${id}__check`}>
        {errorMsg === passwordWrongMsg
          ? (
            <div className={`${className}__check`} id={`${id}__check`}>
              <ul className={`${className}__check__list`}>
                { errorMsg.split('-').forEach((x) => (
                  <li>
                    {x}
                  </li>
                )) }
              </ul>
            </div>
          ) : (
            <p className={`${className}__check__text`}>
              {errorMsg}
            </p>
          )}
      </div>
      <div className={`${className}__back`} id={`${id}__back`}>
        <Link className={`${className}__back__button`} id={`${id}__back__button`} to="/" />
      </div>
      <div className={`${className}__continue`} id={`${id}__continue`}>
        {loading === 1 ? null : <button className={`${className}__continue__button`} id={`${id}__continue__button`} type="submit" form={`${id}__inputs`} disabled={disabled}>create account</button>}
      </div>
      {loading === 2 ? <p>{error}</p> : null}
    </div>
  );
};

export default Signup;

Signup.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
