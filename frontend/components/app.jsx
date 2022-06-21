import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container'
import Home from './home/home';
import { Route} from 'react-router-dom';
// import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

export default () => (
  <div>
    <Route path="/" element={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={SignupContainer} />

  </div>
);
