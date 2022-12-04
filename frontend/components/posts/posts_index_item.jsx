import React from 'react';
import { Link } from "react-router-dom";
import CommentDisplayContainer from '../comments/comment_display_container';



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

        this.commentDisplay = false

        this.likeButtonText = "LIKE"
        this.likeImgUrl = "https://fumblr11-seeds.s3.amazonaws.com/like_icon.png"
        this.handleLike = this.handleLike.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.toggleCommentDisplay = this.toggleCommentDisplay.bind(this)
        this.handleFollow = this.handleFollow.bind(this)

     }
    
    componentDidMount(){
     
    }

    toggleCommentDisplay() {

     if (this.props.currentUserId !== null) {

          if (this.commentDisplay === false) {
               this.commentDisplay = true
          } else if (this.commentDisplay === true) {
               this.commentDisplay = false
          }

          this.setState({like: this.state.like})
     }

    }
    
     deletePost = () => {
          this.props.deletePost(this.props.post.id)
     }

     handleEdit = (e) => {
          e.preventDefault()
          console.log(this.props.post)
          this.props.requestSinglePost(this.props.post.id)
          .then( () => {this.props.openEditPostForm()} )
          .then( () => {this.props.requestAllPosts()})
     }

     handleLike = (e) => {
          e.preventDefault()

          if (this.props.currentUserId !== null) {

               if (this.likeButtonText === "LIKE") {
          
                    this.likeButtonText = "UNLIKE"
                    this.props.createLike(this.state.like)
                    this.likeImgUrl = "https://fumblr11-seeds.s3.amazonaws.com/unlike_icon.png"

               } else {

                    this.likeButtonText = "LIKE"
                    this.props.deleteLike(this.state.like.id)
                    this.likeImgUrl = "https://fumblr11-seeds.s3.amazonaws.com/like_icon.png"
               }

          }

     }

     handleFollow(e) {
          e.preventDefault()

          if (this.props.currentUserId !== null) {

          let follow = {
               follower_id: this.props.currentUserId,
               followee_id: this.props.post.author_id
          }
          this.props.createFollow(follow)

          }
     }


    render() {
         
          let editButton;
          let deleteButton;
          if (this.props.currentUserId === this.props.post.author_id) {
               editButton = <button className="edit-post" onClick={this.handleEdit} ></button>
               deleteButton = <button className="delete-post" onClick={this.deletePost} ></button>
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
          let commentArr = (this.props.comments.filter(comment => comment.post_id === this.props.post.id))
          
          let totalNotes = `${likeArr.length + commentArr.length} Notes`
          
          if (likeArr.length + commentArr.length === 0) {
               totalNotes = ""
          }

          if (likeArr.length + commentArr.length === 1) {
               totalNotes = `${likeArr.length + commentArr.length} Note`
          }

           this.state.like = {
                    liker_id: this.props.currentUserId,
                    post_id: this.props.post.id
          }

        

         for(let i = 0; i < likeArr.length; i++) {
          if (likeArr[i].liker_id === this.state.like.liker_id && likeArr[i].post_id === this.state.like.post_id) {
               this.likeButtonText = "UNLIKE";
               this.likeImgUrl = "https://fumblr11-seeds.s3.amazonaws.com/unlike_icon.png"
               this.state.like.id = likeArr[i].id
               break
          }
         }




         let followButton = <button className="follow-btn" onClick={this.handleFollow}>Follow</button>
         let followArr = (this.props.follows.filter(follow => follow.followee_id === this.props.post.author_id))

         for(let i = 0; i < followArr.length; i++) {
          if (followArr[i].follower_id === this.props.currentUserId) {
               followButton = undefined
               break
          }
         }

         if (this.props.currentUserId === this.props.post.author_id) {
               followButton = undefined
         }
     
       
          // console.log(this.state.like)

               //assign user info to this.state to call in the return below
      return (
           <li className="posts-index-item">
               
               <header className="p-i-header">

                <img className="post-profile-pic" src={avatar_url}/> <span>{username}</span> 

                    {followButton}
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
                         {totalNotes}
                    </div>

                    <button className="comment-post" onClick={this.toggleCommentDisplay}>
                    </button>
                                    
                    <button className="like-post" style={ { backgroundImage: `url( ${this.likeImgUrl} )` } } onClick={this.handleLike}>
                    </button>
                         </div>
               </footer>

               {this.commentDisplay === true && this.props.currentUserId !== null ? <CommentDisplayContainer post={this.props.post} /> : null}
           </li>

          
      )
    }
    }
    
    
    
export default PostsIndexItem;