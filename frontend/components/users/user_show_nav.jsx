import React from 'react';
import { Link } from 'react-router-dom';


class UserShowNav extends React.Component {
    constructor(props){
        super(props)
    }   



    render() {


        return (
            <div className="user-show-nav-bar">
                <Link className="btn" to="/profile">Posts</Link>
                <Link className="btn" to="/likes">Likes</Link>
                <Link className="btn" to="/comments">Comments</Link>
                <Link className="btn" to="/edit-profile-pic">Edit Profile Pic</Link>
            </div>

        )
    }

}




export default UserShowNav