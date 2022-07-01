import { connect } from 'react-redux'
import { selectAllUsers, selectAllLikes , selectPostComments, selectAllFollows} from '../../reducers/selectors';
import { createComment, requestAllComments } from '../../actions/comments'
import { clearErrors } from '../../actions/session'
import CommentDisplay from './comment_display'

const mapStateToProps = (state, ownProps) => ({
    users: selectAllUsers(state),
    likes: selectAllLikes(state),
    comments: selectPostComments(state, ownProps.post.id),
    follows: selectAllFollows(state),
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.comment
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createComment: (comment) => dispatch(createComment(comment)),
    requestAllComments: () => dispatch(requestAllComments()),
    requestAllFollows: () => dispatch(requestAllFollows()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentDisplay);