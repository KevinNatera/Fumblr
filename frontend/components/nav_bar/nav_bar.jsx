import React from 'react';
import { Link } from 'react-router-dom';

//destructuring currentUser and logout, which are being received
//from the nav container
export default ({ currentUser, logout, openSignupForm, openLoginForm }) => {
  
  //use a ternary to conditionally render the right buttons 
  
  const display = currentUser ? (  //if there is a current user, return this
      <div>
        <h2> Welcome, {currentUser.username}!</h2>
        <div className="profile-pic-frame">
        <img className="profile-pic" src={currentUser.avatar_url}/>
        </div>
        <Link className="btn" to="/explore">Home</Link>
        <Link className="btn" to="/profile">Profile</Link>
        <button className="btn" onClick={logout}>Log Out</button>
      </div>
  )  
      :  //if there is no currentUser, return the following instead
  (
    <div>

    
    <button className="btn" onClick={openLoginForm}>Login</button> 
    <button className="btn" onClick={openSignupForm}>Sign Up</button> 
{/*       
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="login">Log In</Link> */}
      {/* <Link className="btn" to={{ pathname: "/login", type: "demo" }}>Demo Login</Link> */}
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">Fumblr</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
