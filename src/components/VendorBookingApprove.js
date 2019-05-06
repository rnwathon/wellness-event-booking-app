import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Modal, Button, Form, Radio, Dimmer, Loader} from 'semantic-ui-react';
import {respondBooking} from './../stores/actions/bookingAction';

class VendorBookingApprove extends Component {
  state = {
    confirmedDate : ''
  }

  componentDidMount(){
    this.setState({confirmedDate: this.props.date[0]})
  }

  handleChange = (e, {value}) => {
    this.setState({confirmedDate:value})
  }

  handleSubmit = e => {
    this.props.respondBooking(this.props.token, this.props.id, "Approved", this.state.confirmedDate)
    .then(() => this.props.handleClose())
  }

  render() {
    return (
      <Modal trigger={<Button color="green">Approve</Button>} centered={false} size="mini">
        <Dimmer inverted active={this.props.isFetching && true}>
          <Loader/>
        </Dimmer>
        <Modal.Header>Choose One of the Proposed Dates</Modal.Header>
        <Modal.Content>
          <Form>
            {
              this.props.date.map((date,i) => {
                return(
                  <Form.Field key={i}>
                    <Radio
                      label={moment(date).format("dddd, DD MMMM YYYY [at] hh:mm A")}
                      name='confirmedDate'
                      value={date}
                      checked={this.state.confirmedDate === date}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                )
              })
            }
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

export default connect(mapStateToProps, {respondBooking})(VendorBookingApprove);