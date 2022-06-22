import { connect } from 'react-redux'
import { login } from '../../actions/session'
import { clearErrors } from '../../actions/session'
import Login from './login'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
})

const mapDispatchToProps = dispatch => ({
    loginUser: formUser => dispatch(login(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);