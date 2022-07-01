import { connect } from 'react-redux'
import { selectCommenter, selectAllLikes, selectAllFollows } from '../../reducers/selectors';
import {  createFollow } from '../../actions/follows'
import {  deleteComment } from '../../actions/comments'
// import { clearErrors } from '../../actions/session'
import CommentDisplayItem from './comment_display_item'

const mapStateToProps = (state, ownProps) => ({
    commenter: selectCommenter(state, ownProps.comment.commenter_id),
    likes: selectAllLikes(state),
    follows: selectAllFollows(state),
    currentUser: state.entities.users[state.session.id]
    // errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    createFollow:  (follow) => dispatch(createFollow(follow)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentDisplayItem);