import { connect } from 'react-redux'
import { createPost } from '../../actions/posts'
// import { clearErrors } from '../../actions/session'
import CreatePost from './create_post'

const mapStateToProps = (state, ownProps) => ({
    // errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    createPost: (formPost) => dispatch(createPost(formPost))
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);