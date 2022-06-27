import { RECEIVE_ALL_LIKES, RECEIVE_LIKE , REMOVE_LIKE} from '../actions/likes';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_ALL_LIKES:
    return Object.assign( {}, action.likes, state);
    case RECEIVE_LIKE:
      const newLike = { [action.like.id]: action.like };
      return newLike;
    case REMOVE_LIKE:
      let nextState = Object.assign({}, state);
      delete nextState[action.likeId];
      return nextState;
  default:
    return state;
  }
}

  
export default likesReducer;
