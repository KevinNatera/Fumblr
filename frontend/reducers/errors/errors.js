import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors';
import postErrorsReducer from './post_errors';
import likeErrorsReducer from './like_errors';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    post: postErrorsReducer,
    like: likeErrorsReducer
})

export default errorsReducer;