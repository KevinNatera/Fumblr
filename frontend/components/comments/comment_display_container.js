import { connect } from 'react-redux'
import { selectAllUsers, selectAllLikes , selectPostComments } from '../../reducers/selectors';
import { requestSinglePost } from '../../actions/posts'
import { createComment, deleteComment } from '../../actions/comments'
// import { clearErrors } from '../../actions/session'
import CommentDisplay from './comment_display'

const mapStateToProps = (state, ownProps) => ({
    users: selectAllUsers(state),
    likes: selectAllLikes(state),
    comments: selectPostComments(state, ownProps.post.id),
    currentUser: state.entities.users[state.session.id]
    // errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestSinglePost: (id) => dispatch(requestSinglePost(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
    
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentDisplay);