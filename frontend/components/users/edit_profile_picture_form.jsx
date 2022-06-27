import React from 'react'
import ReactDOM from 'react-dom'
import { updateUser } from '../../actions/users';




class EditProfilePictureForm extends React.Component {
    constructor(props){
        super(props)
  
      this.onChange = this.onChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.imgRef = React.createRef()
      this.submitButtonRef = React.createRef()
}

  componentDidMount() {
    // console.log(this.props)
 
  }



  onChange(e) {
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      const img = this.imgRef.current;
      const submitButton = this.submitButtonRef.current;

      reader.onloadend = () =>  {

      this.setState({ imgUrl: reader.result, imgFile: file });
      img.src = reader.result
      submitButton.type = "submit"
    }

    if (file) {
      reader.readAsDataURL(file)
     } else {
     this.setState({ imgUrl: "", imgFile: null });
     img.src = ""
     submitButton.type = "hidden"
   }

  } 

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', this.state.imgFile);
   
    // window.formData = formData

    this.props.updateUser(this.props.currentUser.id,formData)
    // .then( () => console.log("yo")) 
    setTimeout( () => {
      window.location.reload()
    }, 125)
    
  
    
    
    
  }


 render() {
    return (
      <div>
            <h1>Choose an Image!</h1>

          <div className="edit-profile-preview-frame">
              <img id="edit-profile-image" 
              src={this.props.currentUser.avatar_url}
              ref={this.imgRef}
              >

              </img>
          </div>


          <form onSubmit={this.handleSubmit}>
            <input 
              type="file"
              accept="image/png, image/jpeg"
              name="avatar"
              onChange={this.onChange}
            />
          

           <input type="hidden" ref={this.submitButtonRef}/>
          </form>
      </div>
    );
  }
}
export default EditProfilePictureForm