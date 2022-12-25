import React from 'react';

class Home extends React.Component {
  constructor(props){
      super(props)
  }   

  componentDidMount() {
  }

  // style={ { backgroundImage: `url( ${src} )` } }

  render() {
    let src = "https://fumblr11-seeds.s3.amazonaws.com/fumblr.png"
  
    if (this.props.currentUser !== undefined && this.props.currentUser.cover_url !== undefined) {
      src = this.props.currentUser.cover_url
    }

      return (

        <div className="home" >
        <div className="home-img-frame" style={ { backgroundImage: `url( ${src} )` } } >
          {/* <img className="home-img" src={src} /> */}
        </div> 
        <h1>Fumblr Home</h1>
      </div>

      )

  }

}


export default Home