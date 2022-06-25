import React from 'react'
import ReactDOM from 'react-dom'





class EditProfilePictureForm extends React.Component {
    constructor(props){
        super(props)

        // this.submitPhoto = this.submitPhoto.bind(this)
        this.onChange = this.onChange.bind(this)

        this.state = {
          imgUrl:  "",
          imgFile: null
        }

        this.imgRef = React.createRef()
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
    formData.append('post[title]', this.state.title);
    if (this.state.photoFile) {

      formData.append('post[photo]', this.state.imgFile);
    }
  //   $.ajax({
  //   url: '/api/posts',
  //   method: 'POST',
  //   data: formData,
  //   contentType: false,
  //   processData: false
  // });
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


          <form>
            <input 
              type="file"
              accept="image/png, image/jpeg"
              onChange={this.onChange}
            />
            
           <input type="submit"/>
          </form>
      </div>
    );
  }
}
export default EditProfilePictureForm