import { connect } from 'react-redux'
import { updatePost } from '../../actions/posts'
import { clearErrors } from '../../actions/session'
import { closeModal } from '../../actions/modal';
import { selectAllPosts } from '../../reducers/selectors';
import EditPostForm from './edit_post_form'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    post: selectAllPosts(state),
    errors: state.errors.post
})

const mapDispatchToProps = dispatch => ({
    updatePost: (post) => dispatch(updatePost(post)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);