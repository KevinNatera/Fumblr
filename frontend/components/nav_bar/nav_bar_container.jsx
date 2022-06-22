import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Comment this back in after you have built the login functionality

// we import logout from session actions to create
// logout button for the user
import { logout } from '../../actions/session';

//pass in the current user to the navbar
const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
  //connected to route api util ------------------
});

//also pass in the logout function
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);