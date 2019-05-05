import React, { Component } from 'react';
import {Modal, Button} from 'semantic-ui-react';

export default class VendorBookingApprove extends Component {
  render() {
    return (
      <Modal trigger={<Button color="green">Approve</Button>} centered={false} size="mini">
        <Modal.Header>Confirm One of the Proposed Dates</Modal.Header>
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
