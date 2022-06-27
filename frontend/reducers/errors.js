import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors';
import postErrorsReducer from './post_errors';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    post: postErrorsReducer
})

export default errorsReducer;