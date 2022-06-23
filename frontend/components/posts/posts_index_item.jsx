import React from 'react';
import { Link } from "react-router-dom";

class PostsIndexItem extends React.Component{
    constructor(props){
    super(props)
    }
    
    componentDidMount(){

    }
    
    render(){

      return (
           <li className="posts-index-item">
                <p>{this.props.post.id}</p>
                <p>{this.props.post.title}</p>
                <p>{this.props.post.body}</p>
                {/* <img src={this.props.post.url} width="30px" height="30px"/> */}
           </li>

      )
    }
    }
    
    
    
export default PostsIndexItem;