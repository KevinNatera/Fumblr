import { connect } from 'react-redux'
import { requestAllUsers } from '../../actions/users'
import { requestAllPosts } from '../../actions/posts'
import { requestAllLikes } from '../../actions/likes'
import { selectAllPosts } from '../../reducers/selectors';
// import { clearErrors } from '../../actions/session'
import PostsIndex from './posts_index'

const mapStateToProps = (state, ownProps) => ({
    posts: selectAllPosts(state)
    // errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    requestAllPosts: () => dispatch(requestAllPosts()),
    requestAllUsers: () => dispatch(requestAllUsers()),
    requestAllLikes: () => dispatch(requestAllLikes()),
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);