import React, { Component } from 'react';
import {Header, Card, Table, Grid} from 'semantic-ui-react';

export default class VendorBooking extends Component {
  render() {
    return (
      <Card className="borderless" fluid>
        <Card.Content>
          <Card.Header blue>Booked Event By Company</Card.Header>
          <Card.Meta> Manage your Booked Event by Companies </Card.Meta>

          <Table basic="very" padded>
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
    )
  }
}
