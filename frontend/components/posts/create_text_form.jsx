import React from 'react'
import { withRouter } from 'react-router-dom';

class CreateTextForm extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
            author_id: this.props.currentUser,
            title: '',
            body: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
        console.log(this.props)
    }

    handleInput(type) {

        return (e) => {
            this.setState({ [type]: e.target.value   })
        }         
    }         

    handleSubmit(e) {
     
        e.preventDefault()
       
        this.props.createPost(this.state)
            .then( () => this.props.closeModal())  //success             //fail ,() => window.location.reload() 
            .then( () => window.location.reload())
            // .then( () => this.props.history.goBack()) if using link
    }  

    handleCancel(e) {
        e.preventDefault()
        this.props.closeModal()
        // this.props.history.goBack()
    }
      

    render() {
        let errors;
        if(this.props.errors.responseJSON) {
            errors = this.props.errors.responseJSON.map( (error, idx) => (
                <li className="error" key={idx}> {error} </li> 
            )
        )}
        
        return (
            <div className="create-post">
                
                <form>
                <h2>Create a New Post!</h2>
                    <label>Title:
                        <input
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                            />
                    </label>
                    <br></br>
                    <label>Body:
                        <textarea
                            value={this.state.body}
                            onChange={this.handleInput('body')}
                            >
                            </textarea>
                    </label>

                    <br></br>



                <button onClick={this.handleSubmit}> Create Post</button>
                <button onClick={this.handleCancel}> Cancel</button>
                <ul>

                { (this.props.errors.responseJSON != null) && errors }

                    </ul>
                
                </form>


           

            </div>
        )
    }
}

export default withRouter(CreateTextForm);