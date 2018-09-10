/*
  The purpose of this component is to make login and signup forms.
  By combining both into one component, we can easily maintain them.
  Evenutally we're gonna remove the sign up form anyways.
*/

import React from 'react';
import AuthService from '../AuthService'; // for login
import API from '../../utils/API'; // for signup
import './Entry.css';

class Entry extends React.Component {
  // state gets made later but it needs to exist for render
  state = {};
  Auth = new AuthService();

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { email, password, confirm } = this.state;
    this.setState({ submitFlag: true }, () => {
      if (email && password) {
        if (this.props.signup) {
          if (password === confirm) {
            this.signup()
          }
        } else {
          this.login()
        }
      }
    })
  }

  login = () => {
    this.Auth.login(this.state.email, this.state.password)
    .then(res => this.props.redirect(res.data.user._id))
    .catch(err => this.setState({ serverFail: true }))
  }

  signup = () => {
    API.signUpUser(this.state.email, this.state.password)
    .then(res => this.props.redirect())
    .catch(err => {
      console.log(err)
      this.setState({ serverFail: true })
    })
  }

  render() {
    const { email, password, confirm, submitFlag, serverFail } = this.state;

    // using this for all error messages to make them manageable
    const errMsg = msg => <div className="error-text">{msg}</div>;

    // reusable function that creates a form group
    const input = (name, placeholder, type = name) => (
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={this.handleChange}
        className={'form-control' + (
          submitFlag && (!this.state[name] || serverFail)
          ? ' error-focus'
          : ''
        )}
      />
    );

    return (
      <div className="container entry">
        <div className="col-lg-4 offset-lg-4 text-center">
          <h1>{this.props.signup ? 'Sign Up' : 'Login'}</h1>
          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              { input('email', 'Email Address') }
              { !email && submitFlag ? errMsg('Required') : null }
            </div>

            <div className="form-group">
              { input('password', 'Password') }
              { !password && submitFlag ? errMsg('Required') : null }
              {/* forgot password */}
              { !this.props.signup && (
                <span id="forgot-password">Forgot password?</span>
              )}

            </div>

            { /* confirm password */
              this.props.signup
              ? (
                <div className="form-group">
                  { input('confirm', 'Confirm Password', 'password') }
                  { !confirm && submitFlag ? errMsg('Required') : null }
                  {
                    confirm && password !== confirm
                    ? errMsg('Passwords do not match')
                    : null
                  }
                </div>
              )
              : null
            }

            <div className="form-group">
              <button type="submit" className="btn">SUBMIT</button>
            </div>

            <div className="form-group">
              {
                serverFail && submitFlag
                ? errMsg(
                    this.props.signup
                    ? 'That email is already in use'
                    : 'Invalid email or password'
                  )
                : null
              }
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default Entry;
