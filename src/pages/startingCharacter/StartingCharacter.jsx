/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { UseSetCharacter } from '../signup/signupHook';

const StartingCharacter = ({ className = 'startingCharacter', id = 'startingCharacter' }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(0);
  const [character, setCharacter] = useState('');
  const [image, setImage] = useState(1);

  const handleCharacter = (e) => {
    e.preventDefault();
    setLoading(1);
    UseSetCharacter(image, token, setError, setLoading);
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
    console.log(image);
  }, [image]);

  return (
    <div className={className} id={id}>
      <h5 className={`${className}__title`} id={`${id}__title`}>athena</h5>
      <div className={`${className}__box`} id={`${id}__box`} />
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
      {loading === 2 ? <p>{error}</p> : null}
    </div>
  );
};

export default StartingCharacter;

StartingCharacter.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
