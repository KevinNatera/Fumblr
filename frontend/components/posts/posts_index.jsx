import React from 'react'
import PostsIndexItemContainer from '../posts/posts_index_item_container';

class PostsIndex extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount() {
        this.props.requestAllUsers(),
        this.props.requestAllPosts(),
        this.props.requestAllLikes()
        this.props.requestAllComments(),
        this.props.requestAllFollows()
    }

    render() {


        if (this.props.currentUserId !== null) {
        
            return (
                <div className="user-show">
                 <h1 className="page">{this.props.text}</h1>
               

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

        } else {

            return (
                <div className="user-show">
                 <h1 className="page">{this.props.text}</h1>
               

                 {this.props.bobPosts.map((post) => (
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

}

export default PostsIndex