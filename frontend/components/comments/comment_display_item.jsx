import React from 'react'


class CommentDisplayItem extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount(){
        console.log(this.props)
    }

    render() {
        
        return (
            <div className="comment-item">
                
                {/* <img className="comment-profile-pic" src={avatar_url}/> */}

                <h2>{this.props.commenter.username}</h2>
                <p>{this.props.comment.body}</p>
                    
             
                
            </div>
        )
    }

}

export default CommentDisplayItem