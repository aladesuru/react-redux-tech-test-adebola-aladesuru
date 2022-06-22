import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messages from '../reducers/messageReducer';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    messages,
  });
