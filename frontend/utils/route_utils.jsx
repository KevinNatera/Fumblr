import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'


//first get props 

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.entities.session.currentUser)
})




//this will be a component for logged in users
//to be redirected
// <AuthRoute path="" component={} /> is how it will be called

const Auth = ({ loggedIn ,path, component: Component }) => (
    <Route
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )} //if the user is loggedIn, redirect them to the home page
    />      //else, spread all the props and add them to the component
);

const Protected = ({ loggedIn, path, component: Component }) => (
    <Route 
        path={path}
        render={props =>  (
            loggedIn ? <Component {...props } /> : <Redirect to="/signup" />
        )}
    />
);


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));