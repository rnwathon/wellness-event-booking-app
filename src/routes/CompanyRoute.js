import React from 'react';
import {Switch} from 'react-router-dom';
import {DashboardLayout} from './layouts';
import CompanyBooking from '../components/CompanyBooking';

export default function CompanyRoute() {
  return (
    <Switch>
      <DashboardLayout exact path="/" component={CompanyBooking} />
    </Switch>
  )
}
