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
                <Link className="btn" to="/followers">Followers</Link>
                <Link className="btn" to="/activity">Activity</Link>
                <Link className="btn" to="/edit-profile">Edit Appearance</Link>
            </div>

        )
    }

}




export default UserShowNav