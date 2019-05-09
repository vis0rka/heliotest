import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './user';

const rootReducer = combineReducers({
  userReducer,
  routing: routerReducer,
});

export default rootReducer;