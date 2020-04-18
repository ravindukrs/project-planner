import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'

class SignIn extends Component {
    state={
        email: "",
        password: "",
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signIn(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        const { authError } = this.props;

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lightne-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p>: null}
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
