import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Header, Card, Grid} from 'semantic-ui-react';
import Alert from './Alert';
import CompanyBooking from './CompanyBooking';

class CompanyDashboard extends Component {
  render() {
    return (
      <div>
        <Alert message={this.props.message} />
        <Grid>
          <Grid.Row>
            <Grid.Column>
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
            <Grid.Column>
              {/* Company Booking Data */}
              <CompanyBooking />
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
    message: store.bookingReducer.message
  }
}

export default connect(mapStateToPros)(CompanyDashboard);