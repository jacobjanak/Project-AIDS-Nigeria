import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    axios.defaults.headers.common.Authorization
    ? <Component {...props} />
    : <Redirect to='/login' />
  )} />
);

export default PrivateRoute;
