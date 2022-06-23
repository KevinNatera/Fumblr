import { connect } from 'react-redux'
import { selectAllUsers } from '../../reducers/selectors';
import { requestAllUsers } from '../../actions/users'
import { deletePost } from '../../actions/posts'

// import { clearErrors } from '../../actions/session'
import PostsIndexItem from './posts_index_item'

const mapStateToProps = (state, ownProps) => ({
    users: selectAllUsers(state)
    // errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestAllUsers: () => dispatch(requestAllUsers()),
    deletePost: () => dispatch(deletePost(ownProps.post.id))
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndexItem);