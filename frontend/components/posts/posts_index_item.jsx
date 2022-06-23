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
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.id}</p>
                <p>{this.props.post.body}</p>
                {/* <img src={this.props.post.url} width="30px" height="30px"/> */}
           </li>

      )
    }
    }
    
    
    
export default PostsIndexItem;