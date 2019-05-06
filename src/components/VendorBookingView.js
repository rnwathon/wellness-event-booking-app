import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Modal, Button, Header, List, Message} from 'semantic-ui-react';
import moment from 'moment';
import VendorBookingApprove from './VendorBookingApprove';
import VendorBookingReject from './VendorBookingReject';

class VendorBookingView extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const booking = this.props.bookings[this.props.id]
    return (
      <Modal 
        trigger={<Button onClick={this.handleOpen} primary>View</Button>} 
        centered={false} 
        size="tiny"
        open={this.state.modalOpen}
        onClose={this.handleClose}
        closeIcon>
        <Modal.Header>Booking Detail</Modal.Header>
        <Modal.Content scrolling>

          {/* Event Name */}
          <Header as="h3">Event Name</Header>
          <p>{booking.idEvent.name}</p>

          {/* Vendor Name */}
          <Header as="h3">Company Name</Header>
          <p>{booking.idCompany.name}</p>
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
        {
          booking.status === 'Pending' &&
          <Modal.Actions>
            <VendorBookingApprove id={booking._id} date={booking.date} handleClose={this.handleClose}/>
            <VendorBookingReject id={booking._id} handleClose={this.handleClose}/>
          </Modal.Actions>
        }
      </Modal>
    )
  }
}

const mapStateToProps = store => {
  return{
    bookings: store.bookingReducer.bookings
  }
}


export default connect(mapStateToProps)(VendorBookingView);