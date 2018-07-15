import React, { Component } from 'react';
import Entry from '../../components/Entry';
import { Link } from 'react-router-dom';

class Signup extends Component {
  redirect = () => {
    this.props.history.replace('/login')
  }

  render() {
    return (
      <div className="login-page">
        <Entry redirect={this.redirect} signup={true} />
        <p className="text-center">
          Already have an account? Login <Link id="here" to="/login">here</Link>
        </p>
      </div>
    );
  }
}
export default Signup;
