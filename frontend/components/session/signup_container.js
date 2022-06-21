//import connect from react-redux, 
//then the specific thunk action creator and component
//we want the container to use

import { connect } from 'react-redux'
import { createNewUser } from '../../actions/session'
import Signup from './signup'

//make the signup class now

//now make mapDispatchTToProps (mDTP)

//returns a POJO
const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
});

export default connect(null, mapDispatchToProps)(Signup);
//this will make the createNewUser available in the props
//of Signup.jsx