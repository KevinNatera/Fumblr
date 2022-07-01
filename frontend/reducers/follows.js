import { RECEIVE_ALL_FOLLOWS, RECEIVE_FOLLOW , REMOVE_FOLLOW} from '../actions/follows';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
  case RECEIVE_ALL_FOLLOWS:
    return Object.assign( {}, action.follows, state);
    case RECEIVE_FOLLOW:
      
      const newFollow = { [action.follow.id]: action.follow };
      return Object.assign(nextState,newFollow);
    case REMOVE_FOLLOW:
      delete nextState[action.followId];
      return nextState;
  default:
    return state;
  }
}

  
export default followsReducer;