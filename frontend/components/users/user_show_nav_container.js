import React from 'react';
import { connect } from 'react-redux';
import UserShowNavBar from './user_show_nav';



const mapStateToProps = state => ({
//   currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(UserShowNavBar);