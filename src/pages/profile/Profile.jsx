/* eslint-disable react/require-default-props */
import propTypes from 'prop-types';
import React from 'react';
import Header from '../../components/Header';

const Profile = ({ className = 'profile', id = 'profile' }) => (
  <Header />
);

export default Profile;

Profile.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
