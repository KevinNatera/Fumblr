//import connect from react-redux, 
//then the specific thunk action creator and component
//we want the container to use

import { connect } from 'react-redux'
import { createNewUser } from '../../actions/session'
import { clearErrors } from '../../actions/session'
import Signup from './signup'

//make the signup class now

//now make mapDispatchTToProps (mDTP)

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session
})


//returns a POJO
const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
//this will make the createNewUser available in the props
//of Signup.jsx