import React, { Component } from 'react';
import {Header, Card, Table} from 'semantic-ui-react';


export default class VendorEvent extends Component {
  render() {
    return (
<div>
        {/* Header */}
        <Card className="borderless" fluid>
          <Card.Content>
            <Header 
              as='h1' 
              color="blue"
              content="Your Event"
              subheader="Manage type of event that you can do"
              className="bolder">
            </Header>
          </Card.Content>
        </Card>

        {/* Table of Booking Data */}
        <Card className="borderless" fluid>
          <Card.Content>

            <Table basic="very" striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Event Name</Table.HeaderCell>
                  <Table.HeaderCell>#</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell colSpan="2" textAlign="center"> You Have No Event Yet.</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
