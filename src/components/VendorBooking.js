import React, { Component } from 'react';
import {Header, Card, Table} from 'semantic-ui-react';


export default class VendorBooking extends Component {
  render() {
    return (
<div>
        {/* Header */}
        <Card className="borderless" fluid>
          <Card.Content>
            <Header 
              as='h1' 
              color="blue"
              content="Your Booking"
              subheader="Manage your Event Booking from Companies"
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
                  <Table.HeaderCell>Company Name</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>CreatedAt</Table.HeaderCell>
                  <Table.HeaderCell>#</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell colSpan="6" textAlign="center"> You Have Not Book Anything Yet.</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
