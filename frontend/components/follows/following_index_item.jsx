import React from 'react';
import { Link } from "react-router-dom";




class FollowingIndexItem extends React.Component{
     constructor(props){
     super(props) 
     
        this.handleUnfollow = this.handleUnfollow.bind(this)
    }

    handleUnfollow(e) {
        e.preventDefault()
        this.props.deleteFollow(this.props.follow.id)
    }


    render() {

        let user;
        let username = "";
        let avatar_url = "https://fumblr11-seeds.s3.amazonaws.com/default_batman.png";

        user = (this.props.users.filter(user => user.id === this.props.follow.followee_id))

        if (user.length != 0) {
           username = user[0].username
           
           if (user[0].avatar_url) {
             avatar_url = user[0].avatar_url
           }

        }

        return (
        
        <li className="following-index-item">

        

        <img className="following-profile-pic" src={avatar_url}/> <span>{username}</span> 

        <button className="unfollow-btn" onClick={this.handleUnfollow}>Unfollow</button>
       

        </li>)
    }

}

export default FollowingIndexItem