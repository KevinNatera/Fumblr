import React from 'react'
import { withRouter } from 'react-router-dom';

class EditPostForm extends React.Component {
    constructor(props) {
        super(props)
      
        this.state = {
            id: this.props.post[0].id,
            author_id: this.props.post[0].author_id,
            title: this.props.post[0].title,
            body: this.props.post[0].body
        }

        // this.state = {
        //     author_id: this.props.currentUser,
        //     title: '',
        //     body: ''
        // }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
        // console.log(this.props.post)
        console.log(this.state)
    }

    handleInput(type) {

        return (e) => {
            this.setState({ [type]: e.target.value   })
        }         
    }         

    handleSubmit(e) {
     
        e.preventDefault()
       
        this.props.updatePost(this.state)
            .then( () => this.props.closeModal())  //success             //fail ,() => window.location.reload() 
            .then( () => window.location.reload())
            // .then( () => this.props.history.goBack()) if using link
    }  

    handleCancel(e) {
        e.preventDefault()
        this.props.closeModal()
        window.location.reload()
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
                <h2>Edit Your Post!</h2>
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



                <button onClick={this.handleSubmit}> Update Post</button>
                <button onClick={this.handleCancel}> Cancel</button>
                <ul>

                { (this.props.errors.responseJSON != null) && errors }

                    </ul>
                
                </form>


           

            </div>
        )
    }
}

export default withRouter(EditPostForm);