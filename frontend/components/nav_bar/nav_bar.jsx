import React from 'react';
import { Link } from 'react-router-dom';



function redirectToGitHub() {
  window.open("https://github.com/KevinNatera", "_blank")
}

function redirectToLinkedIn() {
  window.open("https://www.linkedin.com/in/kevin-n-916683190/", "_blank")
}



//destructuring currentUser and logout, which are being received
//from the nav container
export default ({ currentUser, logout, openSignupForm, openLoginForm }) => {
  

  //use a ternary to conditionally render the right buttons 
  
  const display = currentUser ? (  //if there is a current user, return this
  
      <div>
        <h2> Welcome, {currentUser.username}!</h2>
        <div className="profile-pic-frame">
        <img className="nav-profile-pic" src={currentUser.avatar_url ? currentUser.avatar_url : "https://fumblr11-seeds.s3.amazonaws.com/default_batman.png"}/>
        </div>
       
        <Link className="home-btn" to="/explore">
        <img className="home-btn-img" src="https://fumblr11-seeds.s3.amazonaws.com/home_icon.png"/>
        </Link>
       
        <Link className="profile-btn" to="/profile">
        <img className="profile-btn-img" src="https://fumblr11-seeds.s3.amazonaws.com/profile_icon.png"/>
        </Link>
        <button className="logout-btn" onClick={logout}></button>
      </div>
  )  
      :  //if there is no currentUser, return the following instead
  (
    <div>

    
    <button className="login-btn" onClick={openLoginForm}>Log in</button> 
    <button className="signup-btn" onClick={openSignupForm}>Sign Up</button> 
{/*       
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="login">Log In</Link> */}
      {/* <Link className="btn" to={{ pathname: "/login", type: "demo" }}>Demo Login</Link> */}
    </div>
  );

  return (
    <header className="nav-bar">
      {/* <h1 className="logo">Fumblr</h1>
       */}
       <img className="logo" src="https://fumblr11-seeds.s3.amazonaws.com/fumblr_logo.png"/>
       <img className="github-pic" src="https://fumblr11-seeds.s3.amazonaws.com/github.png" onClick={redirectToGitHub}/>
       <img className="linkedIn-pic" src="https://fumblr11-seeds.s3.amazonaws.com/linkedIn.png" onClick={redirectToLinkedIn}/>
      <div>
        {display}
      </div>
    </header>
  );
};
