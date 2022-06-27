import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import Home from './home/home';

import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'

import PostsIndexContainer from './posts/posts_index_container'
import CreatePostContainer from './posts/create_post_container'

import UserShowContainer from './users/user_show_container'
import UserShowNavContainer from './users/user_show_nav_container'
import EditProfilePictureContainer from './users/edit_profile_picture_container'

import LikesIndexContainer from './likes/likes_index_container'

import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Modal from './modal/modal';

// import ErrorPage from ''


export default () => (
  <div>
    <Modal/> 

    <Route path="/" component={NavBarContainer} />
    <ProtectedRoute path={["/profile","/likes","/comments","/edit-profile-pic","/new"]} component={UserShowNavContainer} />
    
    <Route exact path="/explore" component={Home} />
    <ProtectedRoute exact path={["/explore","/profile","/new"]} component={CreatePostContainer} />
    <ProtectedRoute exact path="/explore" component={PostsIndexContainer} />

    <ProtectedRoute exact path="/profile" component={UserShowContainer} />
    <ProtectedRoute exact path="/likes" component={LikesIndexContainer} />

    <ProtectedRoute exact path="/edit-profile-pic" component={EditProfilePictureContainer} />
    
    {/* <ProtectedRoute exact path="/new/text" component={CreateTextFormContainer} /> */} 


    {/* <Route path="*" component={ErrorPage} /> */}
  </div>
);
