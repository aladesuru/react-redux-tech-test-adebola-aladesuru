import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions/actionCreators';
import Avatar from '../Avatar';
import UserMessageDetails from '../UserMessageDetails';
import PageNotFound from '../PageNotFound';

const UserMessages = ({ messages, listMessage }) => {
  useEffect(() => {
    if (messages.length === 0) {
      listMessage().catch((err) => {
        alert('Loading messages failed' + err);
      });
    }
  }, []);

  return (
    <div>
      {messages.length === 0 ? (
        <PageNotFound />
      ) : (
        <>
          <h1 className="headline">{`List Of Member's Messages`}</h1>
          <Link to="/" className="view-all">
            Back to view All
          </Link>
          <Avatar
            source={messages[0].avatar}
            firstName={messages[0].firstName}
            lastName={messages[0].lastName}
            showName={true}
          />
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
                  showAvatar={false}
                  showEmailAndName={false}
                />
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

UserMessages.propTypes = {
  messages: PropTypes.array.isRequired,
  listMessage: PropTypes.func.isRequired,
};

function mapStateToProps({ messages }, { match }) {
  return {
    messages: messages.filter((chat) => chat.userId === match.params.userId),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    listMessage: () => dispatch(actions.LoadMessages()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMessages);
