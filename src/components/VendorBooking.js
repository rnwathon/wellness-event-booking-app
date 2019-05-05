import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card, Table, Button, Label, Icon, Message} from 'semantic-ui-react';

class VendorBooking extends Component {
  render() {
    return (
      <Card className="borderless extra-padding" fluid>
        <Card.Content>
          <Card.Header>Booked Event By Company</Card.Header>
          <Card.Meta className="mb-2"> Manage your Booked Event by Companies </Card.Meta>

          <Table basic="very" padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Event Name</Table.HeaderCell>
                <Table.HeaderCell>Company Name</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>CreatedAt</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                  this.props.bookings.length === 0 ?
                    <Table.Row>
                      <Table.Cell colSpan="6" textAlign="center"> You Have Not Book Anything Yet.</Table.Cell>
                    </Table.Row>
                  :
                    this.props.bookings.map((event, i) => {
                      return(
                        <Table.Row key={i}>
                          <Table.Cell>{event.eventName}</Table.Cell>
                          <Table.Cell>{event.companyName}</Table.Cell>
                          <Table.Cell width={3}>
                            {
                              event.date.map((date,i) => <Label key={i} style={{margin: '0.15em'}}><Icon name="calendar" /> {date} </Label>)
                            }
                          </Table.Cell>
                          <Table.Cell width={2}>
                            {
                              event.status === 'pending' ? <Message size="tiny" color="orange" compact header={event.status} />
                              : event.status === 'rejected' ? <Message size="tiny" color="red" compact header={event.status} />
                              : event.status === 'approved' ? <Message size="tiny" color="green" compact header={event.status} />
                              : null
                            }
                          </Table.Cell>
                          <Table.Cell>{event.createdAt}</Table.Cell>
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

const mapStateToProps = store => {
  return{
    bookings: store.bookingReducer.bookings
  }
}

export default connect(mapStateToProps)(VendorBooking);