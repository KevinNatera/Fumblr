import { RECEIVE_CURRENT_USER } from "../actions/session";
import {RECEIVE_ALL_USERS , RECEIVE_USER } from "../actions/users"

const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER, RECEIVE_USER:
            return Object.assign( {}, state, { [action.user.id]: action.user });
        case RECEIVE_ALL_USERS:
                return Object.assign( {}, action.users, state);
        default:
            return state;
    }
}

export default usersReducer;