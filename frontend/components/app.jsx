import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import PostsIndexContainer from './posts/posts_index_container'
import UserShowContainer from './users/user_show_container'
import UserShowNavContainer from './users/user_show_nav_container'
import Home from './home/home';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import ModalContainer from './modal/modal_container';

export default () => (
  <div>
    <ModalContainer/> 
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/explore" component={Home} />
    <ProtectedRoute exact path="/explore" component={PostsIndexContainer} />
    <ProtectedRoute path="/profile" component={UserShowNavContainer} />
    <ProtectedRoute path="/likes" component={UserShowNavContainer} />
    <ProtectedRoute path="/comments" component={UserShowNavContainer} />
    <ProtectedRoute exact path="/profile" component={UserShowContainer} />
    <Switch>
    {/* <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} /> */}
    </Switch>
  </div>
);
