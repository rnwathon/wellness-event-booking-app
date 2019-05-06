import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Modal, Button, Form, TextArea, Dimmer, Loader} from 'semantic-ui-react';
import {respondBooking} from './../stores/actions/bookingAction';

class VendorBookingReject extends Component {
  state = {
    remarks : ''
  }

  handleChange = e => {
    this.setState({remarks:e.target.value})
  }

  handleSubmit = e => {
    this.props.respondBooking(this.props.token, this.props.id, "Rejected", null, this.state.remarks)
    .then(() => this.props.handleClose())
  }

  render() {
    return (
     <Modal trigger={<Button color="red">Reject</Button>} centered={false} size="mini">
        <Dimmer inverted active={this.props.isFetching && true}>
          <Loader/>
        </Dimmer>
        <Modal.Header>Give Your Remarks</Modal.Header>
        <Modal.Content>
          <Form>
            <TextArea rows={3} placeholder="give your remarks/reason..." onChange={this.handleChange}/>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="green" onClick={this.handleSubmit}>Submit</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = store => {
  return{
    token: store.loginReducer.token,
    isFetching: store.bookingReducer.isFetching
  }
}

export default connect(mapStateToProps, {respondBooking})(VendorBookingReject);