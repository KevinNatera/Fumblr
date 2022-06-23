import React from 'react';
import { Link } from "react-router-dom";
//import thunk action from posts actions



class PostsIndexItem extends React.Component{
     constructor(props){
     super(props)
    
     }
    
    componentDidMount(){
          this.props.requestAllUsers()
    }
    

    render(){
    

          let deletePost = () => {
               this.props.deletePost(this.props.post.id)
          }
         
          let editButton;
          let deleteButton;
          if (this.props.currentUserId === this.props.post.author_id) {
               editButton = <button className="edit-post">EDIT</button>
               deleteButton = <button className="delete-post" onClick={deletePost} >DELETE</button>
          }
          
          let user;
          let username = "";
          
          user = (this.props.users.filter(user => user.id === this.props.post.author_id))
       
          if (user.length != 0) {
             username = user[0].username
          } else {
               username = "Name Not Found"
          }
          
               //assign user info to this.state to call in the return below
      return (
           <li className="posts-index-item">
                              {/* menu button goes to the top right of username */}
                <h2>{username}</h2>      
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                {/* <img src={this.props.post.url} width="30px" height="30px"/> */}
                
                {deleteButton}
                {editButton}
                    <br></br>
                    <br></br>
                    <button className="comment-post">COMMENT</button>
                    <button className="like-post">LIKE</button>
                {/* comment button then like button */}
           </li>

      )
    }
    }
    
    
    
export default PostsIndexItem;