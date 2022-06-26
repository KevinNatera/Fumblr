import React from 'react'
import { Link } from 'react-router-dom';

class CreatePost extends React.Component {
    constructor(props){
        super(props)
    }
        
    componentDidMount(){
        // this.props.requestAllPosts()
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