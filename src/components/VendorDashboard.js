import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Header, Card, Table, Grid} from 'semantic-ui-react';
import VendorEvent from './VendorEvent';
import VendorBooking from './VendorBooking';


class VendorDashboard extends Component {
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
                    content={`Welcome, ${this.props.role}`}
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
    role: store.loginReducer.role
  }
}

export default connect(mapStateToPros)(VendorDashboard);