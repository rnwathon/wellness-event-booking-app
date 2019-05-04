import React, { Component } from 'react';
import {Card, Table, Button, Message, Label, Icon} from 'semantic-ui-react';
import CompanyBookingAdd from './CompanyBookingAdd';

export default class CompanyBooking extends Component {
  state = {
    booking: [
      {
        eventName: 'Seminar',
        vendorName: 'Avina Medica',
        date: ['2018-02-01', '2019-03-01', '2019-03-21'],
        status: 'approved',
        createdAt: '2018-01-01'
      },
      {
        eventName: 'Medical Check-up',
        vendorName: 'Avina Medica',
        date: ['2018-02-01', '2019-03-01', '2019-03-21'],
        status: 'pending',
        createdAt: '2018-01-01'
      },
      {
        eventName: 'Nobar',
        vendorName: 'Avina Medica',
        date: ['2018-02-01', '2019-03-01', '2019-03-21'],
        status: 'rejected',
        createdAt: '2018-01-01'
      },
      
    ]
  }
  render() {
    return (
      <Card className="borderless extra-padding" fluid>
        <Card.Content>
          <Card.Header>Book an Event</Card.Header>
          <Card.Meta className="mb-2">Manage your event booking</Card.Meta>

          <CompanyBookingAdd/>

          <Table basic="very" padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Event Name</Table.HeaderCell>
                <Table.HeaderCell>Vendor Name</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>CreatedAt</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                this.state.booking.length === 0 ? 
                  <Table.Row>
                    <Table.Cell colSpan="6" textAlign="center"> You Have Not Book Anything Yet.</Table.Cell>
                  </Table.Row>
                : 
                  this.state.booking.map(item => {
                    return(
                      <Table.Row>
                        <Table.Cell>{item.eventName}</Table.Cell>
                        <Table.Cell>{item.vendorName}</Table.Cell>
                        <Table.Cell width={2}>
                          {
                            item.date.map(date => <Label style={{margin: '0.15em'}}><Icon name="calendar" /> {date} </Label>)
                          }
                        </Table.Cell>
                        <Table.Cell width={2}>
                          {
                            item.status === 'pending' ? <Message size="tiny" color="orange" compact header={item.status} />
                            : item.status === 'rejected' ? <Message size="tiny" color="red" compact header={item.status} />
                            : item.status === 'approved' ? <Message size="tiny" color="green" compact header={item.status} />
                            : null
                          }
                        </Table.Cell>
                        <Table.Cell>{item.createdAt}</Table.Cell>
                        <Table.Cell>
                          <Button primary>View</Button>
                        </Table.Cell>
                      </Table.Row>
                    )
                  })
              }
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    )
  }
}
