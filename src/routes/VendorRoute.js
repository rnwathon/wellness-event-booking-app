import React from 'react';
import {Switch} from 'react-router-dom';
import {DashboardLayout} from './layouts';
import VendorBooking from './../components/VendorBooking';
import VendorEvent from './../components/VendorEvent';

export default function CompanyRoute() {
  return (
    <Switch>
      <DashboardLayout exact path="/" component={VendorBooking} />
      <DashboardLayout exact path="/event" component={VendorEvent} />
    </Switch>
  )
}
