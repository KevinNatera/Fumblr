import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT , REMOVE_COMMENT} from '../actions/comments';

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
  case RECEIVE_ALL_COMMENTS:
    return Object.assign( {}, action.comments, state);
    case RECEIVE_COMMENT:
      const newComment= { [action.comment.id]: action.comment };
      return newComment;
    case REMOVE_COMMENT:
      delete nextState[action.commentId];
      return nextState;
  default:
    return state;
  }
}
  
export default commentsReducer;