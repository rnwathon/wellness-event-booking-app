import React, { Component } from 'react';
import { Button, Header, Icon, Modal, Form, Label } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';

export default class CompanyBookingAdd extends Component {

  state = { 
    modalOpen: false,
    event: '',
    vendor: '',
    date: '',
    proposedDate: []
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleDateChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name] : value })
      let newDate = [...this.state.proposedDate];
      newDate.push(value);
      this.setState({ 
        proposedDate: newDate,
        date: ''
      });
    }
  }

  render() {
    return (
      <Modal 
        open={this.state.modalOpen}
        size="tiny" 
        centered={false}
        trigger={<Button className="mb-2" color="blue" onClick={this.handleOpen}><Icon name="plus" /> Book New Event </Button>} 
        >
        <Header content='Book New Event' />
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Event Name</label>
              <select name="event" required onChange={this.handleChange}>
                <option value="" disabled selected>select type of event</option>
                <option>Seminar</option>
                <option>Screening</option>
                <option>Seminar</option>
              </select>
            </Form.Field>

            <Form.Field>
              <label>Vendor Name</label>
              <select name="vendor" required onChange={this.handleChange}>
                <option value="" disabled selected>select vendor</option>
                <option>Aburame</option>
                <option>Konohagakure</option>
              </select>
            </Form.Field>

            <Form.Field>
              <label>Proposed Date</label>
              <DateTimeInput
                name="date"
                placeholder=" Choose Date & Time"
                value={this.state.date}
                onChange={this.handleDateChange}
                />

              {
                this.state.proposedDate.length !== 0 && 
                  this.state.proposedDate.map(date => {
                    return(
                      <Label>{date}<Icon name="delete"/></Label>
                    )
                  })
              }
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
