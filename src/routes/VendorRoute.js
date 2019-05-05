import React from 'react';
import {Switch} from 'react-router-dom';
import {DashboardLayout, LoginLayout} from './layouts';
import VendorDashboard from './../components/VendorDashboard';
import Logout from './../components/Logout';

export default function CompanyRoute() {
  return (
    <Switch>
      <DashboardLayout exact path="/" component={VendorDashboard} />
      <LoginLayout path="/logout" component={Logout} />
    </Switch>
  )
}
