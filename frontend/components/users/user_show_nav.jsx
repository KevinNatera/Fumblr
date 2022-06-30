import React from 'react';
import { Link, useLocation } from 'react-router-dom';





const profileRef = React.createRef()

 
      
        
export default function UserShowNav() {
    
    const location = useLocation();
    console.log(location)

    
       

        return (


            <div className="user-show-nav-bar">
                
                <Link className={location.pathname === "/profile" ? "selected" : "btn"} name="profile" ref={profileRef} to="/profile" >Posts</Link>
                <Link className={location.pathname === "/followers" ? "selected" : "btn"} to="/followers">Followers</Link>
                <Link className={location.pathname === "/activity" ? "selected" : "btn"} to="/activity">Activity</Link>
                <Link className={location.pathname === "/edit-profile" ? "selected" : "btn"}to="/edit-profile">Edit Appearance</Link>
            </div>

        )

}



