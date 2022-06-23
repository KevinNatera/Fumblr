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
        // console.log(this.props.currentUserId) //HAS CURRENT USER id
        
        return (
            <div className="user-show">
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