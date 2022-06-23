import React from 'react'
import PostsIndexItemContainer from './posts_index_item_container';

class PostsIndex extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount(){
        this.props.requestAllPosts()
    }

    render() {
        return (
            <div className="posts-index">
                <ul>

                {this.props.posts.map((post) => (
                <PostsIndexItemContainer key={post.id} post={post} />
                ))
                }
                </ul>





            </div>
        )
    }

}

export default PostsIndex