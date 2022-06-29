import React from 'react';
import { Link } from "react-router-dom";




class PostsIndexItem extends React.Component{
     constructor(props){
     super(props)
     
        this.state = {
             like: {
                  id: "",
                liker_id:"",
                post_id:""
             }
        }

        this.likeButtonText = "LIKE"
        this.handleLike = this.handleLike.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.deletePost = this.deletePost.bind(this)
        

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
     }

     handleLike = (e) => {
          e.preventDefault()

          if (this.likeButtonText === "LIKE") {
          
               this.likeButtonText = "UNLIKE"
               this.props.createLike(this.state.like)

          } else {

               this.likeButtonText = "LIKE"
               this.props.deleteLike(this.state.like.id)
          }

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
          let avatar_url = "https://fumblr11-seeds.s3.amazonaws.com/default_batman.png";
          
          user = (this.props.users.filter(user => user.id === this.props.post.author_id))

          if (user.length != 0) {
             username = user[0].username
             
             if (user[0].avatar_url) {
               avatar_url = user[0].avatar_url
             }
             
          } else {
               username = "Name Not Found"
          }

          let likeArr = (this.props.likes.filter(like => like.post_id === this.props.post.id))
          
          let totalLikes = `${likeArr.length} Notes`
          
          if (likeArr.length === 0) {
               totalLikes = ""
          }

          if (likeArr.length === 1) {
               totalLikes = `${likeArr.length} Note`
          }

           this.state.like = {
                    liker_id: this.props.currentUser,
                    post_id: this.props.post.id
          }

        

         for(let i = 0; i < likeArr.length; i++) {
          if (likeArr[i].liker_id === this.state.like.liker_id && likeArr[i].post_id === this.state.like.post_id) {
               this.likeButtonText = "UNLIKE";
               this.state.like.id = likeArr[i].id
               break
          }
         }
       
          // console.log(this.state.like)

               //assign user info to this.state to call in the return below
      return (
           <li className="posts-index-item">
               
               <header className="p-i-header">

                <img className="profile-pic" src={avatar_url}/> <span>{username}</span> 

                </header> 


                <div className="p-i-title-div">

                <h1>{this.props.post.title}</h1>

                </div>


               <div className="p-i-body-div">

                <p>{this.props.post.body}</p>

          
                </div>
                

               <footer className="p-i-footer">

               <div className="edit-delete-div">
                {deleteButton}

                {editButton}
                    </div>
                <hr noshade="true"></hr>
                  
                    
              
          
               <div className="like-comment-div">

                    <div className="note-div">
                         {totalLikes}
                    </div>

                    <button className="comment-post">COMMENT</button>
                                   
                    <button className="like-post" onClick={this.handleLike}> {this.likeButtonText} 
                    </button>
                         </div>
               </footer>
           </li>

          
      )
    }
    }
    
    
    
export default PostsIndexItem;