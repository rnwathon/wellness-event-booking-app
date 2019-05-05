import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Form, Label } from 'semantic-ui-react';

export default class VendorEventAdd extends Component {

  state = { 
    modalOpen: false,
    event: ''
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <Modal 
        open={this.state.modalOpen}
        size="tiny" 
        centered={false}
        trigger={<Button className="mb-1" color="blue" size="tiny" onClick={this.handleOpen}><Icon name="plus" /> Add New Event </Button>} 
        >
        <Header content='Create New Event' />
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Event Name</label>
              <input name="event" type="text" required onChange={this.handleChange}/>
            </Form.Field>

            <Button color='green' type="submit">
              <Icon name='checkmark' /> Submit
            </Button>
            <Button color='red' onClick={this.handleClose}>
              <Icon name='remove' /> Cancel
            </Button>
            
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}
