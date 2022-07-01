import { 
    RECEIVE_FOLLOW_ERRORS,
    RECEIVE_FOLLOW,
    CLEAR_ERRORS
} from "../../actions/follows";

const followErrorsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_FOLLOW_ERRORS:
            return Object.assign( [], action.errors );
        case RECEIVE_FOLLOW:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default followErrorsReducer;