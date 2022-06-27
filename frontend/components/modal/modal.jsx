import React from 'react';
import { closeModal } from '../../actions/modal';
import { connect } from 'react-redux';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import CreateTextFormContainer from '../posts/create_text_form_container';

function Modal({modal, closeModal , errors}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginContainer />;
      break;
    case 'signup':
      component = <SignupContainer />;
      break;
    case 'new/text':
      component = <CreateTextFormContainer />;
    break;
    default:
      return null;
  }



 
  // { (this.props.errors.responseJSON != null) && errors }
  
  return (
    
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
    errors: state.errors.session,
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
