import React from 'react'
import CommentDisplayItemContainer from '../comments/comment_display_item_container';

class CommentDisplay extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount(){
        // this.props.requestAllUsers(),
        // this.props.requestAllPosts(),
        // this.props.requestAllLikes()
        // console.log(this.props)
        
    }

    render() {
        
        return (
            <div className="comments">


                <h1 className="commenth1">Comments</h1>


                 {this.props.comments.map((comment) => (
                <CommentDisplayItemContainer
                    key={comment.id} 
                    comment={comment} 
                />
               
                ))
                } 
            

             
                
            </div>
        )
    }

}

export default CommentDisplay


               