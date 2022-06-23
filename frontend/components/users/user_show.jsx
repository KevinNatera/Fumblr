import React from 'react'
import PostsIndexItem from '../posts/posts_index_item';

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

export default UserShow