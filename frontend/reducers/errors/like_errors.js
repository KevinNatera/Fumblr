import { 
    RECEIVE_LIKE_ERRORS,
    RECEIVE_LIKE,
    CLEAR_ERRORS
} from "../../actions/likes";

const likeErrorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_LIKE_ERRORS:
            return Object.assign( [], action.errors );
        case RECEIVE_LIKE:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default likeErrorsReducer;