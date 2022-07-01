import { combineReducers } from 'redux';
import usersReducer from './users';
import postsReducer from './posts';
import likesReducer from './likes';
import commentsReducer from './comments';
import followsReducer from './follows';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  likes: likesReducer,
  comments: commentsReducer,
  follows: followsReducer
});
