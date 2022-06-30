import React from 'react'
import PostsIndexItemContainer from '../posts/posts_index_item_container';

class PostsIndex extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount() {
        console.log(this.props)
        this.props.requestAllUsers(),
        this.props.requestAllPosts(),
        this.props.requestAllLikes()
        this.props.requestAllComments()
    }

    render() {
        
        return (
            <div className="user-show">
                <h1>{this.props.text}</h1>
               

                {this.props.posts.map((post) => (
                < PostsIndexItemContainer
                    key={post.id} 
                    post={post} 
                    currentUserId={this.props.currentUserId}
                />
                ))
                }
             
                
            </div>
        )
    }

}

export default PostsIndex