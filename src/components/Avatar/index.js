import React from 'react';
import { PropTypes } from 'prop-types';

const Avatar = (props) => {
  return (
    <>
      <img src={props.source} alt="Avatar" />
      {props.showName === true ? (
        <span>
          {props.firstName} {props.lastName}
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
