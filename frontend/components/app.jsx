import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'
import PostsIndexContainer from './posts/posts_index_container'
import Home from './home/home';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

export default () => (
  <div>
    
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <ProtectedRoute exact path="/posts" component={PostsIndexContainer} />
    <Switch>
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    </Switch>
  </div>
);
