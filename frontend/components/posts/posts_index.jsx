import React from 'react'
import PostsIndexItem from './posts_index_item';

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
                <PostsIndexItem key={post.id} post={post} />
                ))
                }
                </ul>





            </div>
        )
    }

}

export default PostsIndex