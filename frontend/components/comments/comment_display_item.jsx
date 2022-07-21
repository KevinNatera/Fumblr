import React from 'react'


class CommentDisplayItem extends React.Component {
    constructor(props){
        super(props)

        this.deleteComment = this.deleteComment.bind(this)
        this.handleFollow = this.handleFollow.bind(this)
    }
        
    componentDidMount(){
        // console.log(this.props)
    }

    deleteComment(e) {
        e.preventDefault()

        this.props.deleteComment(this.props.comment.id)

    }

    handleFollow(e) {
        e.preventDefault()
        let follow = {
             follower_id: this.props.currentUser.id,
             followee_id: this.props.commenter.id
        }

        this.props.createFollow(follow)
   }

    render() {
        let avatar_url = "https://fumblr11-seeds.s3.amazonaws.com/default_batman.png";
           
        if (this.props.commenter.avatar_url) {
            avatar_url = this.props.commenter.avatar_url
        }

        let deleteButton;

        if (this.props.currentUser.id === this.props.comment.commenter_id) {
            deleteButton = <button className="delete-comment-btn" onClick={this.deleteComment} ></button>
       }

       let followButton = <button className="comment-follow-btn" onClick={this.handleFollow}>Follow</button>
       let followArr = (this.props.follows.filter(follow => follow.followee_id === this.props.commenter.id))

       for(let i = 0; i < followArr.length; i++) {
        if (followArr[i].follower_id === this.props.currentUser.id) {
             followButton = undefined
             break
        }
       }

       if (this.props.currentUser.id === this.props.commenter.id) {
        followButton = undefined
       }
        
        return (
            <div className="comment-item">
                
                <img className="comment-profile-pic" src={avatar_url}/>
            
            <div className="main-comment-div">
                <header className="comment-header">
                
                <h3>{this.props.commenter.username}</h3>
                        
                        
                </header>

                {deleteButton}

                {followButton}


                <div className="comment-body-div">
                <p>{this.props.comment.body}</p>
                    </div>


                    </div>
            </div>
        )
    }

}

export default CommentDisplayItem