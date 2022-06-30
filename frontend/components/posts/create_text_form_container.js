import { connect } from 'react-redux'
import { createPost, requestAllPosts } from '../../actions/posts'
import { clearErrors } from '../../actions/session'
import { closeModal } from '../../actions/modal';
import CreateTextForm from './create_text_form'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    errors: state.errors.post
})

const mapDispatchToProps = dispatch => ({
    createPost: (formPost) => dispatch(createPost(formPost)),
    requestAllPosts: () => dispatch(requestAllPosts()),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTextForm);