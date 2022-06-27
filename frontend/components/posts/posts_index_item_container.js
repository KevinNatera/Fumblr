import { connect } from 'react-redux'
import { selectAllUsers, selectAllLikes } from '../../reducers/selectors';
import { requestSinglePost, deletePost } from '../../actions/posts'
import { createLike, deleteLike } from '../../actions/likes'
import { openModal } from '../../actions/modal';
// import { clearErrors } from '../../actions/session'
import PostsIndexItem from './posts_index_item'

const mapStateToProps = (state, ownProps) => ({
    users: selectAllUsers(state),
    likes: selectAllLikes(state),
    currentUser: state.session.id
    // errors: state.errors.session
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    requestSinglePost: (id) => dispatch(requestSinglePost(id)),
    deletePost: () => dispatch(deletePost(ownProps.post.id)),
    openEditPostForm: () => dispatch(openModal('new/edit')),
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
    
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndexItem);