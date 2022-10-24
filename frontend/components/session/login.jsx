import React from 'react'
import { closeModal } from '../../actions/modal'

class Login extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            password:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
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
            .then( () => this.props.closeModal()) 
           // .then( () =>  {window.location.reload()} )
    }   

    handleDemoLogin(e) {
        e.preventDefault()

        this.props.loginUser({email:'demo@user.com', password:'123456'})
        .then( () => this.props.closeModal())
        // .then( () =>  {window.location.reload()} )
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
                
                <form>
                <h2>Fumblr</h2>
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

                <button onClick={this.handleSubmit}> Login</button>
                <button onClick={this.handleDemoLogin}> Demo Login</button>

                <ul>

                { (this.props.errors.responseJSON != null) && errors }

                </ul>
                
                </form>

            </div>
        )
    }
}

export default Login;