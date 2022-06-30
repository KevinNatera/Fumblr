import React from 'react'
import CommentDisplayItemContainer from '../comments/comment_display_item_container';

class CommentDisplay extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            commenter_id: this.props.currentUser.id,
            post_id: this.props.post.id,
            body: ''
        }

        this.handleSubmit= this.handleSubmit.bind(this)
        this.inputRef = React.createRef()
    }
        
    componentDidMount(){
        // this.props.requestAllUsers(),
        // this.props.requestAllPosts(),
        // this.props.requestAllLikes()
        console.log(this.state)
        this.props.clearErrors()
    }

    handleInput(type) {

        return (e) => {
            this.setState({ [type]: e.target.value   })
        }         
    } 

    handleSubmit(e) {
        e.preventDefault()
        let input = this.inputRef.current;

        this.props.createComment(this.state)
            .then( () => this.props.requestAllComments())
            .then( () =>   input.value = "")
            .then( () => this.state.body = "")
     
        
    }

    render() {
        let errors;
        if(this.props.errors.responseJSON) {
            errors = this.props.errors.responseJSON.map( (error, idx) => (
                <li className="error" key={idx}> {error} </li> 
            )
        )}

        let avatar_url = "https://fumblr11-seeds.s3.amazonaws.com/default_batman.png";
           
        if (this.props.currentUser.avatar_url) {
            avatar_url = this.props.currentUser.avatar_url
        }

        

        return (

            
            <div className="comments">

                    {/* CREATE COMMENT RIGHT HERE */}
               
                    <img className="current-user-comment-pic" src={avatar_url}/>
                        {/* <input
                        
                            
                            type="text"
                            
                            value={this.state.body}
                            onChange={this.handleInput('body')}
                            /> */}
                           <textarea
                           className="create-comment"
                           placeholder="Write a new comment here"
                            value={this.state.body}
                            rows="7"
                            ref={this.inputRef}
                            onChange={this.handleInput('body')}
                            >
                            </textarea>

                    <button className="create-comment-btn" onClick={this.handleSubmit}>Reply</button>
                        

                    <ul className="comment-errors">

                    { (this.props.errors.responseJSON != null) && errors }

                            </ul>

                    


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


               