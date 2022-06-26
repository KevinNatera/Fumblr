import { connect } from 'react-redux'
import { requestAllPosts } from '../../actions/posts'
// import { clearErrors } from '../../actions/session'
import CreatePost from './create_post'

const mapStateToProps = (state, ownProps) => ({
    // errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    requestAllPosts: () => dispatch(requestAllPosts())
    // clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);