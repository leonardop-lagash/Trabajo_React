import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import random from './random';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ router, random });

  return rootReducer;
}

export default createRootReducer;
