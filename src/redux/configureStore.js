import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rockets from './Rockets/rockets';
import missionsReducer from './missions/missions';
// import profileReducer from './profile/profile';

const reducer = combineReducers({
  rockets,
  missions: missionsReducer,
  // profile: profileReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
