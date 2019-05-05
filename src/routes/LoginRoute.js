import React from 'react';
import {Switch} from 'react-router-dom';
import {LoginLayout} from './layouts';
import Login from './../components/Login';
import Logout from './../components/Logout';

export default function LoginRoute() {
  return (
    <Switch>
      <LoginLayout exact path="/" component={Login} />
      <LoginLayout path="/logout" component={Logout} />
    </Switch>
  )
}
