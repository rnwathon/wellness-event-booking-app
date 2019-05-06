import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addEvent} from './../stores/actions/eventAction';
import { Button, Header, Icon, Modal, Form, Dimmer, Loader } from 'semantic-ui-react';

class VendorEventAdd extends Component {

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

  handleSubmit = e => {
    e.preventDefault();
    this.props.addEvent(this.props.token, this.state.event)
    .then(() => {
      this.handleClose();
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
        <Dimmer inverted active={this.props.isFetching && true}>
          <Loader/>
        </Dimmer>
        <Header content='Create New Event' />
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
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

const mapStateToProps = store => {
  return{
    token: store.loginReducer.token,
    isFetching: store.eventReducer.isFetching
  }
}

export default connect(mapStateToProps, {addEvent})(VendorEventAdd)