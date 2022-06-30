import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom'




class EditProfilePictureForm extends React.Component {
    constructor(props){
        super(props)
  
      this.onProfileChange = this.onProfileChange.bind(this)
      this.onCoverChange = this.onCoverChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.profileImgRef = React.createRef()
      this.coverImgRef = React.createRef()
      this.submitButton = React.createRef()

}

  componentDidMount() {
    // console.log(this.props)
 
  }



  onProfileChange(e) {
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      const profileImg = this.profileImgRef.current;
      const submitButton = this.submitButton.current;

      reader.onloadend = () =>  {

      this.setState({ profileImgUrl: reader.result, profileImgFile: file });
      profileImg.src = reader.result
      submitButton.type = "submit"
    }

  

    if (file) {
      reader.readAsDataURL(file)
     } else {
     this.setState({ profileImgUrl: "", profileImgFile: null });
     profileImg.src = ""

     if (this.state.coverImgUrl === "") {
      submitButton.type = "hidden"
     }

   }

  } 


  onCoverChange(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    const coverImg = this.coverImgRef.current;
    const submitButton = this.submitButton.current;

    reader.onloadend = () =>  {

    this.setState({ coverImgUrl: reader.result, coverImgFile: file });
    coverImg.src = reader.result
    submitButton.type = "submit"
  }

 

  if (file) {
    reader.readAsDataURL(file)
   } else {
   this.setState({ coverImgUrl: "", coverImgFile: null });
   coverImg.src = ""

   if (this.state.profileImgUrl === "") {
    submitButton.type = "hidden"
   }
   
 }

} 

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    if (this.state.profileImgFile !== undefined) {
      formData.append('avatar', this.state.profileImgFile);
    } 

    if (this.state.coverImgFile !== undefined) {
      formData.append('cover', this.state.coverImgFile);
    }
  
    // window.formData = formData

    this.props.updateUser(this.props.currentUser.id,formData)
    .then( () => this.props.history.push('/explore')) 
    .then( () =>{window.location.reload()}) 
  }


 render() {
    return (
      <div className="edit-profile-frame">
            <h1>Choose a New Profile Image!</h1>

          


          <form onSubmit={this.handleSubmit}>

          <div className="edit-profile-preview-frame">
              <img id="edit-profile-image" 
              src={this.props.currentUser.avatar_url ? currentUser.avatar_url : "https://fumblr11-seeds.s3.amazonaws.com/default_batman.png"}
              ref={this.profileImgRef}
              >

              </img>
          </div>
            <input
              className="edit-profile-input"
              type="file"
              accept="image/png, image/jpeg"
              name="avatar"
              onChange={this.onProfileChange}
            />
          <div className="edit-profile-divider"></div>

           
          <h1>Choose a New Cover Image!</h1>

          <div className="edit-cover-preview-frame">
              <img id="edit-profile-image" 
              src={this.props.currentUser.cover_url ? currentUser.cover_url : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fskycenter.arizona.edu%2Fsites%2Fdefault%2Ffiles%2Fgallery%2FGalaxies%2Fm81.jpg&f=1&nofb=1"}
              ref={this.coverImgRef}
              >

              </img>
          </div>

            <input
              className="edit-cover-input"
              type="file"
              accept="image/png, image/jpeg"
              name="cover"
              onChange={this.onCoverChange}
            />
          

          <input className="edit-profile-submit" type="hidden" value="Update Profile" ref={this.submitButton}/>

          </form>

          
      </div>
    );
  }
}
export default withRouter(EditProfilePictureForm)