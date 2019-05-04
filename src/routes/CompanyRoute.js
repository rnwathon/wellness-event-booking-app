import React from 'react';
import {Switch} from 'react-router-dom';
import {DashboardLayout} from './layouts';
import CompanyDashboard from '../components/CompanyDashboard';

export default function CompanyRoute() {
  return (
    <Switch>
      <DashboardLayout exact path="/" component={CompanyDashboard} />
    </Switch>
  )
}
