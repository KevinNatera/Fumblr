import { combineReducers } from 'redux';
import usersReducer from './users';
import postsReducer from './posts';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer
});
