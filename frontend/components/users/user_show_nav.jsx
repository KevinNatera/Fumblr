import React from 'react';
import { Link } from 'react-router-dom';


class UserShowNav extends React.Component {
    constructor(props){
        super(props)
    }   



    render() {


        return (
            <div id="user-show-nav">

                <Link className="btn" to="/profile/posts">Posts</Link>
                <Link className="btn" to="/profile/likes">Likes</Link>
                <Link className="btn" to="/profile/comments">Comments</Link>
            </div>

        )
    }

}




export default UserShowNav