import React from 'react';
import { Link } from 'react-router-dom';


class UserShowNav extends React.Component {
    constructor(props){
        super(props)
    }   



    render() {


        return (
            <div className="nav-bar">

                <Link className="btn" to="/profile/posts">Posts</Link>
                <Link className="btn" to="/profile/likes">Likes</Link>
                <Link className="btn" to="/profile/comments">Comments</Link>
            </div>

        )
    }

}




export default UserShowNav