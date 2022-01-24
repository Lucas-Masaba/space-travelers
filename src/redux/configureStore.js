import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import rocketsReducer from './rockets/rockets';
// import missionsReducer from './missions/missions';
// import profileReducer from './profile/profile';

const reducer = combineReducers({
  // rockets: rocketsReducer,
  // missions: missionsReducer,
  // profile: profileReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
