import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import axios from 'axios';
import AuthService from '../AuthService';

const Auth = new AuthService();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.loggedIn()
    ? <Component {...props} />
    : <Redirect to='/login' />
  )} />
);

export default PrivateRoute;
