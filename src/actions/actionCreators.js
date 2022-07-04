import * as action from './actionTypes';
import * as messageApi from '../data';

async function callMember() {
  try{
    const members = await messageApi.getMembers();
    // Convert array of users to object, the key is the user id
    const transformMemberToObj= members.reduce((a, user) => ({...a, [user.id]: user}), {});
    return transformMemberToObj;
  }catch(error){
    throw error;
  }
}

async function transformMemberMessages(messages) {
  try {
      // Add user's information to messages
      const members = await callMember();
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
  } catch (error) {
      throw error;

  }
}

export function dataAfterTransformation(messages) {
  return { type: action.LOAD_MESSAGES, messages };
}

export function LoadMessages() {
  return async function (dispatch) {
    try {
      const  getMemberMessages = await messageApi.getMessages();
      const transformedData = await transformMemberMessages(getMemberMessages);
      dispatch(dataAfterTransformation(transformedData));
    } catch (error) {
      throw error;
    }
  };
}
