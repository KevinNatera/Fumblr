import { connect } from 'react-redux'
import { requestAllPosts } from '../../actions/posts'
import { requestAllLikes } from '../../actions/likes'
import { selectUserPosts } from '../../reducers/selectors';
// import { clearErrors } from '../../actions/session'
import UserShow from './user_show'

const mapStateToProps = (state, ownProps) => ({
    posts: selectUserPosts(state, state.session.id),
    currentUserId: state.session.id
    // errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    requestAllPosts: () => dispatch(requestAllPosts()),
    requestAllLikes: () => dispatch(requestAllLikes())
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);