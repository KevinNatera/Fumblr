import React from 'react'
//always import React in jsx files to get component extension
//return an empty div and export to finish container before finishing this
//after container is done, create local state for form components (constructor method)

class Signup extends React.Component {
    constructor(props) {
        super(props)
        //local state
        this.state = {
            username: '',
            email: '',
            password:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    //after constructor, build the handle input function
    //for form fields to update state accordingly

    handleInput(type) {
        //e is the event object passed in by the eventHandler
        return (e) => {
            this.setState({ [type]: e.target.value   })
        }         //putting type in brackets makes it evaluate 
    }           //before it is assigned

    handleSubmit(e) {
        //we prevent default because clicking a submit button defaults to
        //submitting a post request and making the page re-render
        //which is not ideal
        e.preventDefault()
        //after the form is filled out, the state will have all the data required to 
        //create a user
        this.props.createNewUser(this.state)
            .then( () => this.props.closeModal())  //success             //fail ,() => window.location.reload() 
            // .then( () =>  {window.location.reload()} )
    }   //then if the user is created, redirect 

        //you have to bind handle submit because it is not available in the render
        //function otherwise


    render() {
        let errors;
        if(this.props.errors.responseJSON) {
            errors = this.props.errors.responseJSON.map( (error, idx) => (
                <li className="error" key={idx}> {error} </li> 
            )
        )}
        
        return (
            <div className="session-form">
                
                <form>
                <h2>Fumblr</h2>
                    <label className="username-label">Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            />
                    </label>
                    <br></br>
                    <label className="email-label">Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                    </label>
                        <br></br>
                    <label className="password-label">Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                    </label>


                <button onClick={this.handleSubmit}> Sign Up</button>

                <ul>

                { (this.props.errors.responseJSON != null) && errors }

                    </ul>
                
                </form>


           

            </div>
        )
    }
}

export default Signup;