import { connect } from 'react-redux'
import { createPost } from '../../actions/posts'
import { clearErrors } from '../../actions/session'
import { openModal } from '../../actions/modal';
import CreateTextForm from './create_text_form'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    createPost: (formPost) => dispatch(createPost(formPost)),
    openCreateTextPost: () => dispatch(openModal('new/text')),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTextForm);