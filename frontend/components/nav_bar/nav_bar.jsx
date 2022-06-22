import React from 'react';
import { Link } from 'react-router-dom';

//destructuring currentUser and logout, which are being received
//from the nav container
export default ({ currentUser, logout }) => {
  
  //use a ternary to conditionally render the right buttons

  const display = currentUser ? (  //if there is a current user, return this
      <div>
        <h2> Welcome, {currentUser.username}!</h2>
        <button onClick={logout}> Log Out</button>
      </div>
  ) : //if there is no currentUser, return this instead
  
  (
    <div>
      
      
      <Link className="btn" to="/">Home</Link>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to={{ pathname: "/login", type: "login" }}>Log In</Link>
      <Link className="btn" to={{ pathname: "/login", type: "demo" }}>Demo Login</Link>
      {/* pass props in demo link */}
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
