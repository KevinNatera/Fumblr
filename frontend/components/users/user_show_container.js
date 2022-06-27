import { connect } from 'react-redux'
import { requestAllUsers} from '../../actions/users'
import { requestAllPosts } from '../../actions/posts'
import { requestAllLikes } from '../../actions/likes'
import { selectUserPosts } from '../../reducers/selectors';
// import { clearErrors } from '../../actions/session'
import PostsIndex from '../posts/posts_index'

const mapStateToProps = (state, ownProps) => ({
    posts: selectUserPosts(state, state.session.id),
    currentUserId: state.session.id,
    text: "My Posts"
    // errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    requestAllUsers: () => dispatch(requestAllUsers()),
    requestAllPosts: () => dispatch(requestAllPosts()),
    requestAllLikes: () => dispatch(requestAllLikes())
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);