import React from 'react';
import { connect } from 'react-redux';
import EditProfilePictureForm from './edit_profile_picture_form';



const mapStateToProps = state => ({
//   currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePictureForm);