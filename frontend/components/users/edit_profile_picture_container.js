import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users';
import EditProfilePictureForm from './edit_profile_picture_form';



const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    updateUser: (id, formData) => dispatch(updateUser(id, formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePictureForm);