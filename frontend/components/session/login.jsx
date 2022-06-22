import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            password:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    handleInput(type) {
        
        return (e) => {
            this.setState({ [type]: e.target.value   })
        }     
    }       

    handleSubmit(e) {
        e.preventDefault()
        
        this.props.loginUser(this.state) 
            .then( () => this.props.history.push(`/`) )
    }   

    render() {
        let errors;
        if(this.props.errors.responseJSON) {
            errors = this.props.errors.responseJSON.map( (error, idx) => (
                <li className="error" key={idx}> {error} </li> 
            )
        )}
        return (
            <div className="session-form">
                <h2>Login!</h2>
                <form>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                    </label>
                        <br></br>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                    </label>

                <button onClick={this.handleSubmit}> Login</button>
                
                </form>


                <ul>

                 { (this.props.errors.responseJSON != null) && errors }

                </ul>

            </div>
        )
    }
}

export default Login;