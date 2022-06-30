import React from 'react'


class CommentDisplayItem extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount(){
        // console.log(this.props)
    }

    render() {
        let avatar_url = "https://fumblr11-seeds.s3.amazonaws.com/default_batman.png";
           
        if (this.props.commenter.avatar_url) {
            avatar_url = this.props.commenter.avatar_url
        }
        
        return (
            <div className="comment-item">
                
                <img className="comment-profile-pic" src={avatar_url}/>
            
            <div className="main-comment-div">
                <header className="comment-header">
                
                <h3>{this.props.commenter.username}</h3>
                        {/* followbutton */}
                </header>

                <div className="comment-body-div">
                <p>{this.props.comment.body}</p>
                    </div>


                    </div>
            </div>
        )
    }

}

export default CommentDisplayItem