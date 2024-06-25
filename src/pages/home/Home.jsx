/* eslint-disable react/require-default-props */
import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ className = 'home', id = 'home' }) => (
  <div className={className} id={id}>
    <h5 className={`${className}__title`} id={`${id}__title`}>athena</h5>
    <div className={`${className}__menu`} id={`${id}__menu`}>
      <Link className={`${className}__menu__signup`} id={`${id}__menu__signup`} to="/signup">
        <button className={`${className}__button`} id={`${id}__button`} type="button">new game</button>
      </Link>
      <Link className={`${className}__menu__login`} id={`${id}__menu__login`} to="/login">
        <button className={`${className}__button`} id={`${id}__button`} type="button">continue</button>
      </Link>
      <Link className={`${className}__menu__about`} id={`${id}__menu__about`} to="/about">
        <button className={`${className}__button`} id={`${id}__button`} type="button">learn more</button>
      </Link>
    </div>
    <a className={`${className}__github`} id={`${id}__github`} target="_blank" rel="noopener noreferrer" href="https://github.com/nnross" aria-label="github" />
  </div>
);

export default Home;

Home.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
