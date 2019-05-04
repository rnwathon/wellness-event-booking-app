import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Header, Card, Grid} from 'semantic-ui-react';
import CompanyBooking from './CompanyBooking';

class CompanyDashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column>
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
            <Grid.Column>
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
    role: store.loginReducer.role
  }
}

export default connect(mapStateToPros)(CompanyDashboard);