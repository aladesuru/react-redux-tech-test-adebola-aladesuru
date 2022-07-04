import * as action from './actionTypes';
import * as messageApi from '../data';

async function getData(data){
  try {
    return await data;
  } catch (error) {
    throw error;
  }

}

async function converMembersDataToObj() {
  // Convert array of users to object, the key is the user id
  const members = await getData(messageApi.getMembers());
  const transformMemberToObj= members.reduce((a, user) => ({...a, [user.id]: user}), {});
  return transformMemberToObj;
}

async function transformMemberMessages(messages) {
  // Add user's information to messages
  const members = await converMembersDataToObj();
  const userMessages = messages.map((message) => {
  const {id, ip, avatar: userPic , ...userInfo} = members[message.userId];
  const { timestamp, ...messageInfo } = message;
  return {
          ...messageInfo,
          avatar : userPic ? userPic : "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
          date : timestamp,
          ...userInfo
      }
})
  return userMessages.sort((a, b) => (a.date > b.date && 1) || -1);
}

export function dataAfterTransformation(messages) {
  return { type: action.LOAD_MESSAGES, messages };
}

export function LoadMessages() {
  return async function (dispatch) {
      const  getMemberMessages = await getData(messageApi.getMessages());
      const transformedData = await transformMemberMessages(getMemberMessages);
      dispatch(dataAfterTransformation(transformedData));
  };
}
