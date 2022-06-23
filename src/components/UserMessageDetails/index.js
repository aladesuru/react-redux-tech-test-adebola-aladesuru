import React from 'react';
import { PropTypes } from 'prop-types';
import { formatDate } from '../../formatDate/formatDate';
import Avatar from '../Avatar';
import UserName from '../UserName';

const UserMessageDetails = (props) => {
  return (
    <li className="list-item">
      <div className="list-item-message">
        {props.showAvatar ? (
          <div className="avatar">
            <Avatar source={props.avatar} firstName={props.firstName} lastName={props.lastName} showName={false} />
          </div>
        ) : null}
        <p className="message">{props.message}</p>
      </div>
      <div className="publish-details">
        {props.showEmailAndName ? (
          <div className="userName_email">
            <p className="authors-email">{props.email}</p>
            <UserName firstName={props.firstName} lastName={props.lastName} userId={props.userId} />
          </div>
        ) : null}
        <p className="publish-date">{formatDate(props.date)}</p>
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
