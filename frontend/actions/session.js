import { postUser, postSession, deleteSession} from '../utils/session';

//then make constants to actually receive errors if mispellings
//in reducers occur

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

//then create action creators
//the whole point of an action creator is to return a POJO
//with a type and payload for our reducers

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

//then create thunk action creators for the containers to use

//takes in a user object from a form (formUser) (form isn't built yet)
//curries and receives dispatch from thunk middleware
//postUser is an ajax request (in api util file) that returna a promise
//this means we can call .then on it
//.then if we receive a user, dispatch our invoked action with the user

export const createNewUser = (formUser) => dispatch => postUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
         err => dispatch(receiveErrors(err)) );

export const login = (formUser) => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
         err => dispatch(receiveErrors(err)) );

//thunk action creaters must be arrow functions if they take no args
export const logout = () => dispatch => deleteSession()
    .then( () => dispatch(logoutCurrentUser()), 
        err => dispatch(receiveErrors(err)) );