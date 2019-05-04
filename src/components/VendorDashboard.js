import React, { Component } from 'react';
import {Header, Card, Table, Grid} from 'semantic-ui-react';
import VendorEvent from './VendorEvent';
import VendorBooking from './VendorBooking';


export default class VendorDashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              {/* Header */}
              <Card className="borderless" fluid>
                <Card.Content>
                  <Header 
                    as='h1' 
                    color="blue"
                    icon="dashboard"
                    content="Dashboard"
                    className="bolder">
                  </Header>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>
              <VendorEvent />
            </Grid.Column>
            <Grid.Column width={12}>
              <VendorBooking />
            </Grid.Column>
          </Grid.Row>
        </Grid>

        
      </div>
    )
  }
}
