import React, { Component } from 'react';
import {Modal, Button} from 'semantic-ui-react';

export default class VendorBookingReject extends Component {
  render() {
    return (
      <Modal trigger={<Button color="red">Reject</Button>} centered={false} size="mini">
        <Modal.Header>Give your remarks</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>index ke: {this.props.id}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green">Submit</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
