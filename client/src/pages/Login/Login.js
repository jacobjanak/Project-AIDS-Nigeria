import React, { Component } from 'react';
import Entry from '../../components/Entry';
import { Link } from 'react-router-dom';

class Login extends Component {
  redirect = userID => {
    this.props.history.replace('/profile/' + userID)
  }

  render() {
    return (
      <div className="login-page">
        <Entry redirect={this.redirect} />
        <p className="text-center">
          Don't have an account? Sign up <Link id="here" to="/signup">here</Link>
        </p>
      </div>
    );
  }
}
export default Login;
