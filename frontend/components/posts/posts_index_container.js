import { connect } from 'react-redux'
import { requestAllUsers } from '../../actions/users'
import { requestAllPosts } from '../../actions/posts'
import { requestAllLikes } from '../../actions/likes'
import { requestAllComments } from '../../actions/comments'
import { selectAllPosts } from '../../reducers/selectors';
// import { clearErrors } from '../../actions/session'
import PostsIndex from './posts_index'

const mapStateToProps = (state, ownProps) => ({
    posts: selectAllPosts(state),
    currentUserId: state.session.id,
    text: "All Posts"
    // errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    requestAllPosts: () => dispatch(requestAllPosts()),
    requestAllUsers: () => dispatch(requestAllUsers()),
    requestAllLikes: () => dispatch(requestAllLikes()),
    requestAllComments: () => dispatch(requestAllComments())
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);