import React, { Component } from 'react';
import {Modal, Button} from 'semantic-ui-react';
import VendorBookingApprove from './VendorBookingApprove';
import VendorBookingReject from './VendorBookingReject';

export default class VendorBookingView extends Component {
  render() {
    return (
      <Modal trigger={<Button primary>View</Button>} centered={false} size="small">
        <Modal.Header>Booking Details</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>index ke: {this.props.id}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <VendorBookingApprove id={this.props.id} />
          <VendorBookingReject id={this.props.id} />
        </Modal.Actions>
      </Modal>
    )
  }
}
