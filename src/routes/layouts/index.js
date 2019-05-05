import React from 'react';
import {Route} from 'react-router-dom';
import Sidebar from './../../components/Sidebar';

export const DashboardLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div className="dashboard">
        <div className="dashboard__sidebar">
          <Sidebar />
        </div>
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
      <Component {...props} />
    )} />
  )
}