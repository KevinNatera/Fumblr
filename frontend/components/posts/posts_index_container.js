import { connect } from 'react-redux'
import { requestAllPosts } from '../../actions/posts'
import { selectAllPosts } from '../../reducers/selectors';
// import { clearErrors } from '../../actions/session'
import PostsIndex from './posts_index'

const mapStateToProps = (state, ownProps) => ({
    posts: selectAllPosts(state)
    // errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    requestAllPosts: () => dispatch(requestAllPosts())
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);