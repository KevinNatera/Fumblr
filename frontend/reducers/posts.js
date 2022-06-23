import { RECEIVE_ALL_POSTS, RECEIVE_POST , REMOVE_POST} from '../actions/posts';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_ALL_POSTS:
    return Object.assign( {}, action.posts, state);
    case RECEIVE_POST:
      const newPost = { [action.post.id]: action.post };
      return newPost;
    case REMOVE_POST:
      let nextState = Object.assign({}, state);
      delete nextState[action.postID];
      return nextState;
  default:
    return state;
  }
}
  
export default postsReducer;