//import action constants
import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session'

//create default state to return if there is no currentUser
//or to logout a user
const _nullSession = {
    currentUser: null,
};

//now make reducers
//every reducer takes in the state, and the action
export default (state = _nullSession, action) => {
    Object.freeze(state); 
    //freeze to prevent accidental changes
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            //returns the currentUser object received from the action 
            //nested under the key currentUser
            return Object.assign( {}, { currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            //keep the state the same otherwise
            return state;
    }

}