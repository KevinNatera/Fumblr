import { connect } from 'react-redux'
import { requestAllUsers } from '../../actions/users'
import { requestAllPosts } from '../../actions/posts'
import { requestAllLikes } from '../../actions/likes'
import { requestAllComments } from '../../actions/comments'
import { requestAllFollows } from '../../actions/follows'
import { selectUserLikedPosts} from '../../reducers/selectors';
// import { clearErrors } from '../../actions/session'
import PostsIndex from '../posts/posts_index'

const mapStateToProps = (state, ownProps) => ({
    posts: selectUserLikedPosts(state, state.session.id),
    currentUserId: state.session.id,
    text: "Liked Posts"
    // errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    requestAllUsers: () => dispatch(requestAllUsers()),
    requestAllPosts: () => dispatch(requestAllPosts()),
    requestAllLikes: () => dispatch(requestAllLikes()),
    requestAllComments: () => dispatch(requestAllComments()),
    requestAllFollows: () => dispatch(requestAllFollows())
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);