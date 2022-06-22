import React from 'react'

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
            .then( () => this.props.history.push(`/`) )
    }   

    handleDemoLogin(e) {
        e.preventDefault()

        this.props.loginUser({email:'demo@user.com', password:'123456'})
        .then( () => this.props.history.push(`/`) )
    }

    render() {
        console.log(this.props)
        let errors;
        if(this.props.errors.responseJSON) {
            errors = this.props.errors.responseJSON.map( (error, idx) => (
                <li className="error" key={idx}> {error} </li> 
            )
        )}
        
        let button;
        if(this.props.location.type === "demo") {
            button = <button onClick={this.handleDemoLogin}> Demo Login</button>
        } else {
            button = <button onClick={this.handleSubmit}> Login</button>
        }

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

                    {button}

                </form>


                <ul>

                 { (this.props.errors.responseJSON != null) && errors }

                </ul>

            </div>
        )
    }
}

export default Login;