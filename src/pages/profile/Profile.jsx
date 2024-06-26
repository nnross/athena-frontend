/* eslint-disable react/require-default-props */
import propTypes from 'prop-types';
import React from 'react';

const Profile = ({ className = 'profile', id = 'profile' }) => (
  <div className={className} id={id}>
    <h5 className={`${className}__title`} id={`${id}__title`}>profile</h5>
  </div>
);

export default Profile;

Profile.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
