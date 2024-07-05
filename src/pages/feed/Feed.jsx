/* eslint-disable react/require-default-props */
import propTypes from 'prop-types';
import React from 'react';
import Header from '../../components/Header';

const Feed = ({ className = 'feed', id = 'feed' }) => (
  <Header />
);

export default Feed;

Feed.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
};
