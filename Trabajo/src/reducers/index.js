import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

function createRootReducer(history) {
  const router = connectRouter(history);
  const rootReducer = combineReducers({ router });

  return rootReducer;
}

export default createRootReducer;
