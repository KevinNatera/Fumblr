import { RECEIVE_ALL_POSTS, RECEIVE_POST , REMOVE_POST} from '../actions/posts';

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
  case RECEIVE_ALL_POSTS:
    return Object.assign( {}, action.posts, state);
    case RECEIVE_POST:
      const newPost = { [action.post.id]: action.post };
      return newPost;
      // const newPost = { [action.post.id]: action.post };
      // return Object.assign(nextState,newPost);
    case REMOVE_POST:
      delete nextState[action.postId];
      return nextState;
  default:
    return state;
  }
}
  
export default postsReducer;
