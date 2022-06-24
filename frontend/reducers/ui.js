import { combineReducers } from 'redux';

import modalReducer from './modal';

export default combineReducers({
  modal: modalReducer
});