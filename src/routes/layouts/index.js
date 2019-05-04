import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
import Sidebar from './../../components/Sidebar';

export const DashboardLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div className="dashboard">
        <div className="dashboard__sidebar">
          <Sidebar>
            <ul>
              <li><NavLink to="/"> <Icon name="dashboard" /> Dashboard </NavLink></li>
            </ul>
          </Sidebar>
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
