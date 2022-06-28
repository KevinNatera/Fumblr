import React from 'react';
import { connect } from 'react-redux';

import Home from './home';



const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);