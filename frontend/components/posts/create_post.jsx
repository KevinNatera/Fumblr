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
               
              <Link className="btn" to="/new/text" onClick={this.props.openCreateTextPost}>Text</Link>
            {/* <button className="btn"onClick={this.props.openCreateTextPost} > TEST</button> */}
             

              <Link className="btn" to="/new/photo">Photo</Link>

            </div>
        )
    }

}

export default CreatePost