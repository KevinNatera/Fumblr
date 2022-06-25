import React from 'react'
import ReactDOM from 'react-dom'
import { updateUser } from '../../actions/users';




class EditProfilePictureForm extends React.Component {
    constructor(props){
        super(props)

      //   this.state = {
      //     imgUrl:  "",
      //     imgFile: null
      // }

  
      this.onChange = this.onChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.imgRef = React.createRef()
}

  componentDidMount() {
    console.log(this.props)
  }



  onChange(e) {
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      const img = this.imgRef.current;

      reader.onloadend = () =>  {

      this.setState({ imgUrl: reader.result, imgFile: file });
      img.src = reader.result
    }

    if (file) {
      reader.readAsDataURL(file)
     } else {
     this.setState({ imgUrl: "", imgFile: null });
     img.src = ""
   }

  } 

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', this.state.imgFile);
    
    
   
    window.formData = formData


    this.props.updateUser(this.props.currentUser.id,formData)
    // $.ajax({
    //   method: "POST",
    //   processData: false,
    //   contentType: false,
    //   cache: false,
    //   url: `/api/users/${this.props.currentUser.id}`,
    //   data: { avatar: formData},
    //   success: function(response) {
    //     // Code to handle a succesful upload
    //     console.log("we did it")
    //   }
    // })
  }


 render() {
    return (
      <div>
        EDIT PROFILE PICTURE

          <div className="edit-profile-preview-frame">
              <img id="edit-profile-image" 
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fskycenter.arizona.edu%2Fsites%2Fdefault%2Ffiles%2Fgallery%2FGalaxies%2Fm81.jpg&f=1&nofb=1"
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
          

           <input type="submit"/>
          </form>
      </div>
    );
  }
}
export default EditProfilePictureForm