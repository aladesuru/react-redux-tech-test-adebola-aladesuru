import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserName = ({ firstName, lastName, userId }) => {
  return <Link to={`/userId/${userId}`}>{`${firstName} ${lastName}`}</Link>;
};

UserName.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default UserName;
