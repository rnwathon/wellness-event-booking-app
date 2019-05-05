import React from 'react';
import {Switch} from 'react-router-dom';
import {DashboardLayout, LoginLayout} from './layouts';
import CompanyDashboard from '../components/CompanyDashboard';
import Logout from './../components/Logout';

export default function CompanyRoute() {
  return (
    <Switch>
      <DashboardLayout exact path="/" component={CompanyDashboard} />
      <LoginLayout path="/logout" component={Logout} />
    </Switch>
  )
}
