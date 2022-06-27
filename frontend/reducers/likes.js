import { RECEIVE_ALL_LIKES, RECEIVE_LIKE , REMOVE_LIKE} from '../actions/likes';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
  case RECEIVE_ALL_LIKES:
    return Object.assign( {}, action.likes, state);
    case RECEIVE_LIKE:
      
      const newLike = { [action.like.id]: action.like };
    //   return newLike;
      return Object.assign(nextState,newLike);
    case REMOVE_LIKE:
      delete nextState[action.likeId];
      return nextState;
  default:
    return state;
  }
}

  
export default likesReducer;
