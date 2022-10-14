import React from 'react';

class Home extends React.Component {
  constructor(props){
      super(props)
  }   

  componentDidMount() {
  }



  render() {
    let src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fskycenter.arizona.edu%2Fsites%2Fdefault%2Ffiles%2Fgallery%2FGalaxies%2Fm81.jpg&f=1&nofb=1"
  
    if (this.props.currentUser !== undefined && this.props.currentUser.cover_url !== undefined) {
      src = this.props.currentUser.cover_url
    }

      return (

        <div className="home" >
        <div className="home-img-frame">
          <img className="home-img" src={src} />
        </div> 
        <h1>Fumblr Home</h1>
      </div>

      )

  }

}


export default Home