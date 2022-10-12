import React from 'react';
import { Link, useLocation } from 'react-router-dom';
    
export default function UserShowNav() {
    
    const location = useLocation();
   
        return (

            //standard

            <div className="user-show-nav-bar">
                
                <Link className={location.pathname === "/profile" ? "selected" : "btn"} to="/profile" >Posts</Link>
                <Link className={location.pathname === "/following" ? "selected" : "btn"} to="/following">Following</Link>
                <Link className={location.pathname === "/activity" ? "selected" : "btn"} to="/activity">Activity</Link>
                <Link className={location.pathname === "/edit-profile" ? "selected" : "btn"}to="/edit-profile">Edit Appearance</Link>
            </div>


//Bootstrap

//         <div className="user-showe-nav-bar">  
//             <ul className="nav flex-column mb-0 ">
//     <li className="nav-item">
//       <a href="/#/profile" className="nav-link text-white font-italic">
//                 <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
//                 Profile
//             </a>
//     </li>
//     <li className="nav-item">
//       <a href="/#/following" className="nav-link text-white font-italic">
//                 <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
//                 Following
//             </a>
//     </li>
//     <li className="nav-item">
//       <a href="/#/activity" className="nav-link text-white font-italic">
//                 <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
//                 Activity
//             </a>
//     </li>
//     <li className="nav-item">
//       <a href="/#/edit-profile" className="nav-link text-white font-italic">
//                 <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
//                 Edit Appearance
//             </a>
//     </li>
//   </ul>
//   </div>


        )


}
