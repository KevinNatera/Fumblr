import React from 'react'
import { Route, Link } from 'react-router-dom';
import PostsIndexContainer from '../posts/posts_index_container';

class CreatePost extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount(){
        
    }

    render() {
        return (
            <div className="create-post-frame">
               
              <Link className="btn" to="/new/text">Text</Link>
          
             

              <Link className="btn" to="/new/photo">Photo</Link>

            </div>
        )
    }

}

export default CreatePost