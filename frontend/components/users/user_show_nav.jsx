import React from 'react';
import { Link, useLocation } from 'react-router-dom';
    
export default function UserShowNav() {
    
    const location = useLocation();
   
        return (

            <div className="user-show-nav-bar">
                
                <Link className={location.pathname === "/profile" ? "selected" : "btn"} to="/profile" >Posts</Link>
                <Link className={location.pathname === "/following" ? "selected" : "btn"} to="/following">Following</Link>
                <Link className={location.pathname === "/activity" ? "selected" : "btn"} to="/activity">Activity</Link>
                <Link className={location.pathname === "/edit-profile" ? "selected" : "btn"}to="/edit-profile">Edit Appearance</Link>
            </div>

        )

}



