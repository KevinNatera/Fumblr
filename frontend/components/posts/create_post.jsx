import React from 'react'
import { Route, Link } from 'react-router-dom';


class CreatePost extends React.Component {
    constructor(props){
        super(props)

       
    }
        
    componentDidMount(){
      
    }


    render() {
        let avatar_url = "https://fumblr11-seeds.s3.amazonaws.com/default_batman.png";
          

            if (this.props.currentUser !== undefined && this.props.currentUser.avatar_url !== undefined) {
              avatar_url = this.props.currentUser.avatar_url
            }
            


        return (
            <div> 
                
                

            <div className="create-post-frame">

            <img className="create-profile-pic" src={avatar_url}/>

                <div className="create-post-center">
              {/* <Link className="btn" to="/new/text" onClick={this.props.openCreateTextPost}>Text</Link> */}
              <button className="create-btn" onClick={this.props.openCreateTextPost}> {/* <span>Post Here!</span>  */} </button>
              <span className="create-span">Post Here!</span>
                </div>
            </div>

            </div>
        )
    }

}

export default CreatePost