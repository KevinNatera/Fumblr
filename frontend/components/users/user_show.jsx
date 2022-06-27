import React from 'react'
import PostsIndexItemContainer from '../posts/posts_index_item_container';

class UserShow extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount(){
        this.props.requestAllPosts()
    }

    render() {
        
        return (
            <div className="user-show">
                <h1>My Posts</h1>
                <ul>

                {this.props.posts.map((post) => (
                < PostsIndexItemContainer
                    key={post.id} 
                    post={post} 
                    currentUserId={this.props.currentUserId}
                />
                ))
                }
                </ul>

            </div>
        )
    }

}

export default UserShow