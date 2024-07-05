/* eslint-disable react/require-default-props */
import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = ({ className = 'header', id = 'header' }) => (
  <div className={className} id={id}>
    <div className={`${className}__title`} id={`${id}__title`}>
      <h5 className={`${className}__title__text`} id={`${id}__title__text`}>athena</h5>
    </div>
    <div className={`${className}__nav`} id={`${id}__nav`}>
      <NavLink className={({ isActive }) => (isActive ? `${className}__nav__profile__active` : `${className}__nav__profile`)} to="/profile" />
      <NavLink className={({ isActive }) => (isActive ? `${className}__nav__feed__active` : `${className}__nav__feed`)} to="/feed" />
      <NavLink className={({ isActive }) => (isActive ? `${className}__nav__gacha__active` : `${className}__nav__gacha`)} to="/gacha" />
      <NavLink className={({ isActive }) => (isActive ? `${className}__nav__settings__active` : `${className}__nav__settings`)} to="/settings" />
      <button className={`${className}__nav__logout`} id={`${id}__nav__logout`} type="button" aria-label="logout" />

    </div>
  </div>
);

export default Header;

Header.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
