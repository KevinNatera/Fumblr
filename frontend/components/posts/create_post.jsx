import React from 'react'
import { Route, Link } from 'react-router-dom';


class CreatePost extends React.Component {
    constructor(props){
        super(props)

       
    }
        
    componentDidMount(){

    }


    render() {
        return (
            <div className="create-post-frame">
               <h1> Create Post</h1>
              {/* <Link className="btn" to="/new/text" onClick={this.props.openCreateTextPost}>Text</Link> */}
              <button className="btn" onClick={this.props.openCreateTextPost}>Text</button>
    
             
              {/* <button className="btn" >Photo</button> */}

            </div>
        )
    }

}

export default CreatePost