import React from 'react';
import { PropTypes } from 'prop-types';
import { formatDate } from '../../formatDate/formatDate';
import Avatar from '../Avatar';
import UserName from '../UserName';

const UserMessageDetails = (props) => {
  const { avatar, firstName, lastName, message, email, userId, date, showAvatar, showEmailAndName } = props;
  return (
    <li className="list-item">
      <div className="list-item-message">
        {showAvatar ? (
          <div className="avatar">
            <Avatar source={avatar} firstName={firstName} lastName={lastName} showName={false} />
          </div>
        ) : null}
        <p className="message">{message}</p>
      </div>
      <div className="publish-details">
        {showEmailAndName ? (
          <div className="userName_email">
            <p className="authors-email">{email}</p>
            <UserName firstName={firstName} lastName={lastName} userId={userId} />
          </div>
        ) : null}
        <p className="publish-date">{formatDate(date)}</p>
      </div>
    </li>
  );
};

UserMessageDetails.propTypes = {
  avatar: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  showAvatar: PropTypes.bool.isRequired,
  showEmailAndName: PropTypes.bool.isRequired,
};

export default UserMessageDetails;
