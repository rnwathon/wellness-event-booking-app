import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Modal, Button, Header, List, Message} from 'semantic-ui-react';
import moment from 'moment';

class CompanyBookingView extends Component {
  render() {
    const booking = this.props.bookings[this.props.id]
    return (
      <Modal trigger={<Button primary>View</Button>} centered={false} size="tiny" closeIcon>
        <Modal.Header>Booking Detail</Modal.Header>
        <Modal.Content scrolling>

          {/* Event Name */}
          <Header as="h3">Event Name</Header>
          <p>{booking.idEvent.name}</p>

          {/* Vendor Name */}
          <Header as="h3">Vendor Name</Header>
          <p>{booking.idEvent.idVendor.name}</p>
          <br />

          {/* Proposed Date */}
          {
            !booking.confirmedDate &&
              <div>
                <Header as="h3">Proposed Date</Header>
                {
                  booking.date.map(date=> {
                    return(
                      <List bulleted>
                        <List.Item>{moment(date).format("dddd, DD MMMM YYYY [at] hh:mm A")}</List.Item>
                      </List>
                    )
                  })
                }
              </div>
          }

          {/* Confirmed Date */}
          {
            booking.confirmedDate &&
              <div>
                <Header as="h3">Confirmed Date</Header>
                <List bulleted>
                  <List.Item>{moment(booking.confirmedDate).format("dddd, DD MMMM YYYY [at] hh:mm A")}</List.Item>
                </List>
              </div> 
          }

          {/* Status */}
          <Header as="h3">Status</Header>
          {
            booking.status === 'Pending' ? <Message size="tiny" color="orange" fluid header={booking.status} />
              : booking.status === 'Rejected' ? <Message size="tiny" color="red" fluid header={booking.status} />
              : booking.status === 'Approved' ? <Message size="tiny" color="green" fluid header={booking.status} />
              : null
          }

          {/* Remarks */}
          {
            booking.remarks &&
              <div>
                <Header as="h3">Remarks</Header>
                <p>{booking.remarks}</p>
              </div> 
          }
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = store => {
  return{
    bookings: store.bookingReducer.bookings
  }
}

export default connect(mapStateToProps)(CompanyBookingView);
