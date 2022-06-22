import * as action from './actionTypes';
import * as messageApi from '../data';

function callMember() {
  return messageApi
    .getMembers()
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
}

function transformData(messages) {
  return callMember().then((members) => {
    const data = [];
    for (let i = 0; i < messages.length; i++) {
      for (let k = 0; k < members.length; k++) {
        if (messages[i].userId === members[k].id) {
          data.push({
            id: messages[i].id,
            date: messages[i].timestamp,
            message: messages[i].message,
            userId: members[k].id,
            firstName: members[k].firstName,
            lastName: members[k].lastName,
            avatar: members[k].avatar ? members[k].avatar : 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
            email: members[k].email,
          });
        }
      }
    }
    return data.sort((a, b) => (a.date > b.date && 1) || -1);
  });
}

export function dataAfterTransformation(messages) {
  return { type: action.LOAD_MESSAGES, messages };
}

export function LoadMessages() {
  return function (dispatch) {
    return messageApi
      .getMessages()
      .then((res) => {
        transformData(res).then((messages) => dispatch(dataAfterTransformation(messages)));
      })
      .catch((error) => {
        throw error;
      });
  };
}
