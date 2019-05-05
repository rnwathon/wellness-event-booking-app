import React, { Component } from 'react';
import {Modal, Button} from 'semantic-ui-react';

export default class CompanyBookingView extends Component {
  render() {
    return (
      <Modal trigger={<Button primary>View</Button>} centered={false}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>index ke: {this.props.id}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
