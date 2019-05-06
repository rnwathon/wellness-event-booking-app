import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Header, Card, Table, Grid} from 'semantic-ui-react';
import Alert from './Alert';
import VendorEvent from './VendorEvent';
import VendorBooking from './VendorBooking';

class VendorDashboard extends Component {
  render() {
    return (
      <div>
        <Alert message={this.props.message} />
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              {/* Header */}
              <Card className="borderless" fluid>
                <Card.Content>
                  <Header 
                    as='h1' 
                    color="blue"
                    content={`Welcome, ${this.props.name}`}
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

const mapStateToPros = store => {
  return {
    name: store.loginReducer.name,
    role: store.loginReducer.role,
    message: store.eventReducer.message || store.bookingReducer.message
  }
}

export default connect(mapStateToPros)(VendorDashboard);