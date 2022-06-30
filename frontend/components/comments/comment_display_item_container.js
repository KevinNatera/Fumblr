import { connect } from 'react-redux'
import { selectAllUsers, selectAllLikes } from '../../reducers/selectors';
import { requestSinglePost, deletePost } from '../../actions/posts'
import {  deleteComment } from '../../actions/comments'
import { openModal } from '../../actions/modal';
// import { clearErrors } from '../../actions/session'
import CommentDisplayItem from './comment_display_item'

const mapStateToProps = (state, ownProps) => ({
    users: selectAllUsers(state),
    likes: selectAllLikes(state),
    currentUser: state.entities.users[state.session.id]
    // errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestSinglePost: (id) => dispatch(requestSinglePost(id)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
    
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentDisplayItem);