import { combineReducers } from 'redux';
import usersReducer from './users';
import postsReducer from './posts';
import likesReducer from './likes';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  likes: likesReducer
});
