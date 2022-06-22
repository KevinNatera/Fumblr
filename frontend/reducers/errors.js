import sessionErrorsReducer from './session_errors';
import { combineReducers } from 'redux';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
})

export default errorsReducer;