import React from 'react';
import {Switch} from 'react-router-dom';
import {DashboardLayout} from './layouts';
import VendorDashboard from './../components/VendorDashboard';

export default function CompanyRoute() {
  return (
    <Switch>
      <DashboardLayout exact path="/" component={VendorDashboard} />
    </Switch>
  )
}
