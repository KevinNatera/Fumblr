import { connect } from 'react-redux'
import { createPost } from '../../actions/posts'
import { clearErrors } from '../../actions/session'
import { openModal, closeModal } from '../../actions/modal';
import CreatePost from './create_post'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    errors: state.errors.post
})

const mapDispatchToProps = dispatch => ({
    createPost: (formPost) => dispatch(createPost(formPost)),
    openCreateTextPost: () => dispatch(openModal('new/text')),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);