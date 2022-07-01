import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import HomeContainer from './home/home_container';

import SignupContainer from './session/signup_container'
import LoginContainer from './session/login_container'

import PostsIndexContainer from './posts/posts_index_container'
import CreatePostContainer from './posts/create_post_container'

import UserShowContainer from './users/user_show_container'
import UserShowNavContainer from './users/user_show_nav_container'
import EditProfilePictureContainer from './users/edit_profile_picture_container'

import LikesIndexContainer from './likes/likes_index_container'

import FollowingIndexContainer from './follows/following_index_container'

import { Route, Switch, Redirect, Navigate } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_utils';
import Modal from './modal/modal';

// import ErrorPage from ''


export default () => (
  <div>
    <Modal/> 

    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" render={() => <Redirect to="/explore" />} />
   
    <ProtectedRoute path={["/profile","/activity","/following","/comments","/edit-profile","/new"]} component={UserShowNavContainer} />
    
    <Route exact path="/explore" component={HomeContainer} />
    <ProtectedRoute exact path={["/explore","/profile","/new"]} component={CreatePostContainer} />
    <ProtectedRoute exact path="/explore" component={PostsIndexContainer} />

    <ProtectedRoute exact path="/profile" component={UserShowContainer} />
    <ProtectedRoute exact path="/activity" component={LikesIndexContainer} />
    <ProtectedRoute exact path="/following" component={FollowingIndexContainer} />

    <ProtectedRoute exact path="/edit-profile" component={EditProfilePictureContainer} />
    
    {/* <ProtectedRoute exact path="/new/text" component={CreateTextFormContainer} /> */} 
    
    {/* <Redirect from="/" to="/explore" />" */}
    {/* <Route path="*" component={ErrorPage} /> */}
  </div>
);
