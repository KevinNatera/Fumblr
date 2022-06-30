import { 
    RECEIVE_COMMENT_ERRORS,
    RECEIVE_COMMENT,
    CLEAR_ERRORS
} from "../../actions/comments";

const commentErrorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return Object.assign( [], action.errors );
        case RECEIVE_COMMENT:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default commentErrorsReducer;