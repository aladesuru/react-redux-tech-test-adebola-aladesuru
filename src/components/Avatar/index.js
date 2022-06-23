import React from 'react';
import { PropTypes } from 'prop-types';

const Avatar = ({ firstName, lastName, source, showName }) => {
  return (
    <>
      <img src={source} alt="Avatar" />
      {showName === true ? (
        <span>
          {firstName} {lastName}
        </span>
      ) : null}
    </>
  );
};

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
  showName: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Avatar;
