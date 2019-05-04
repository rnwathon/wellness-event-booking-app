import React from 'react';
import {Switch} from 'react-router-dom';
import {LoginLayout} from './layouts';
import Login from './../components/Login';

export default function LoginRoute() {
  return (
    <Switch>
      <LoginLayout exact path="/" component={Login} />
    </Switch>
  )
}
