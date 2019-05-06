import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card, Table, Dimmer, Loader, Message, Label} from 'semantic-ui-react';
import {getBookingsByCompany} from './../stores/actions/bookingAction';
import CompanyBookingAdd from './CompanyBookingAdd';
import CompanyBookingView from './CompanyBookingView';
import moment from 'moment';

class CompanyBooking extends Component {

  componentDidMount(){
    this.props.getBookingsByCompany(this.props.token);
  }
  
  render() {
    return (
      <Card className="borderless extra-padding" fluid>
        <Card.Content>
          <Dimmer inverted active={this.props.isFetching && true}>
            <Loader/>
          </Dimmer>

          <Card.Header>Book an Event</Card.Header>
          <Card.Meta className="mb-1">Manage your event booking</Card.Meta>

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
                this.props.bookings.length === 0 ? 
                  <Table.Row>
                    <Table.Cell colSpan="6" textAlign="center"> You Have Not Book Anything Yet.</Table.Cell>
                  </Table.Row>
                : 
                  this.props.bookings.map((event, i) => {
                    return(
                      <Table.Row key={i}>
                        <Table.Cell>{event.idEvent.name}</Table.Cell>
                        <Table.Cell>{event.idEvent.idVendor.name}</Table.Cell>
                        <Table.Cell width={5}>
                          {
                            event.confirmedDate ? 
                              <Label key={i} style={{margin: '0.15em'}} size="large">
                                {moment(event.confirmedDate).format('dddd, DD MMMM YYYY [at] hh:mm A')}
                              </Label> :
                              event.date.map((date,i) => {
                                return(
                                  <Label key={i} style={{margin: '0.15em'}} size="large">
                                    {moment(date).format('dddd, DD MMMM YYYY [at] hh:mm A')}
                                  </Label>
                                )})
                            }
                        </Table.Cell>
                        <Table.Cell width={2}>
                          {
                            event.status === 'Pending' ? <Message size="tiny" color="orange" compact header={event.status} />
                            : event.status === 'Rejected' ? <Message size="tiny" color="red" compact header={event.status} />
                            : event.status === 'Approved' ? <Message size="tiny" color="green" compact header={event.status} />
                            : null
                          }
                        </Table.Cell>
                        <Table.Cell>{event.createdAt}</Table.Cell>
                        <Table.Cell>
                          <CompanyBookingView id={i} />
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
  return {
    token: store.loginReducer.token,
    isFetching: store.bookingReducer.isFetching,
    bookings: store.bookingReducer.bookings
  }
}
export default connect(mapStateToProps, {getBookingsByCompany})(CompanyBooking);
