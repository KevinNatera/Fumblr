import React from 'react';
import { Link } from "react-router-dom";




class PostsIndexItem extends React.Component{
     constructor(props){
     super(props)
          
        this.likeButtonText = "LIKE"

        this.deletePost = this.deletePost.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
     }
    
    componentDidMount(){
     
    }
    
     deletePost = () => {
          this.props.deletePost(this.props.post.id)
          .then(() => { window.location.reload()})

     }

     handleEdit = (e) => {
          e.preventDefault()
          this.props.requestSinglePost(this.props.post.id)
          .then( () => {this.props.openEditPostForm()} )


          // this.props.openEditPostForm();
     }

    render() {
         
          let editButton;
          let deleteButton;
          if (this.props.currentUserId === this.props.post.author_id) {
               editButton = <button className="edit-post"onClick={this.handleEdit} >EDIT</button>
               deleteButton = <button className="delete-post" onClick={this.deletePost} >DELETE</button>
          }
          
          let user;
          let username = "";
          
          user = (this.props.users.filter(user => user.id === this.props.post.author_id))

          if (user.length != 0) {
             username = user[0].username
          } else {
               username = "Name Not Found"
          }

          let likeArr = (this.props.likes.filter(like => like.post_id === this.props.post.id))
          let totalLikes = likeArr.length
          let like = {
               
                    liker_id: this.props.currentUser,
                    post_id: this.props.post.id
          }

        

         for(let i = 0; i < likeArr.length; i++) {
          if (likeArr[i].liker_id === like.liker_id && likeArr[i].post_id === like.post_id) {
               this.likeButtonText = "UNLIKE";
               break
          }
         }
          

          
          console.log(like)
          

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
                                   
                    <button className="like-post">{this.likeButtonText} 
                    ({totalLikes})</button>
                {/* comment button then like button */}
           </li>

      )
    }
    }
    
    
    
export default PostsIndexItem;