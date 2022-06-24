import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/actionCreators';
import UserMessageDetails from '../UserMessageDetails';

const ListAllUsersMessages = ({ messages, listMessage }) => {
  useEffect(() => {
    if (messages.length === 0) {
      listMessage().catch((err) => {
        alert('Loading messages failed' + err);
      });
    }
  }, []);

  return (
    <>
      <h1 className="headline">List of Messages from Members</h1>
      <ul className="list-container">
        {messages.map((content) => {
          return (
            <UserMessageDetails
              key={content.id}
              firstName={content.firstName}
              lastName={content.lastName}
              avatar={content.avatar}
              message={content.message}
              email={content.email}
              userId={content.userId}
              date={content.date}
              showAvatar={true}
              showEmailAndName={true}
            />
          );
        })}
      </ul>
    </>
  );
};

ListAllUsersMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  listMessage: PropTypes.func.isRequired,
};

function mapStateToProps({ messages }) {
  return {
    messages,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    listMessage: () => dispatch(actions.LoadMessages()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAllUsersMessages);
