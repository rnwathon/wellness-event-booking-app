import React from 'react';
import {Route} from 'react-router-dom';

export const DashboardLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div className="dashboard">
        <div className="dashboard__content">
          <Component {...props} />
        </div>
      </div>
    )} />
  )
}

export const LoginLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div className="login">
        <div className="login__content">
          <Component {...props} />
        </div>
      </div>
    )} />
  )
}
