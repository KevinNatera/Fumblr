import React from 'react'


class CommentDisplayItem extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount(){
  
    }

    render() {
        
        return (
            <div className="comment-item">
                
               
                <h1>{this.props.comment.body}</h1>
               
             
                
            </div>
        )
    }

}

export default CommentDisplayItem