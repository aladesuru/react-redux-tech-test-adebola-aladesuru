import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export default function loadMessage(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}
