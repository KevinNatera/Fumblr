import { connect } from 'react-redux'
import Modal from './modal'
import { clearErrors } from '../../actions/session'

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
})


//returns a POJO
const mapDispatchToProps = dispatch => ({
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
