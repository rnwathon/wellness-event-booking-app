import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import { Button, Header, Icon, Modal, Form, Label, Message, Dropdown } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import {getCountries, getAddress} from './../stores/actions/locationAction';
import {getNormalizedEvents} from './../stores/actions/eventAction';
import {addBooking} from './../stores/actions/bookingAction';

class CompanyBookingAdd extends Component {

  state = { 
    modalOpen: false,
    event: '',
    eventId: '',
    date: '',
    proposedDate: [],
    proposedDateLimit: false,
    postal: '',
    country: '',
    address: ''
  }

  componentDidMount(){
    this.props.getCountries();
    this.props.getNormalizedEvents(this.props.token);
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCountryChange = (event, {value}) => {
    this.setState({country: value})
  }

  handleGetAddress = () => {
    this.props.getAddress(this.state.postal, this.state.country).then(() => {
      this.setState({address: this.props.address})
    });
  }

  handleDateChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      if(this.state.proposedDate.length < 3){
        this.setState({ [name] : value })
        let newDate = [...this.state.proposedDate];
        newDate.push(value);
        this.setState({ 
          proposedDate: newDate,
          date: newDate
        });
      } else {
        this.setState({proposedDateLimit: true})
        setTimeout(()=> {
          this.setState({proposedDateLimit: false})
        },5000)
      }
    }
  }

  handleDateDelete = i => {
    let newPropossedDate = [...this.state.proposedDate];
    newPropossedDate.splice(i,1);
    this.setState({
      proposedDate: newPropossedDate,
      date: newPropossedDate
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBooking(this.props.token, this.state.eventId, this.state.proposedDate, this.state.address);
    this.handleClose();
  }

  render() {
    // mapped countries list to a new format for Dropdown Component
    const countriesMapped = this.props.countries.map(country => {
      return {
        key: country.alpha2Code,
        value: country.alpha2Code,
        text: country.name
      }
    })

    return (
      <Modal 
        open={this.state.modalOpen}
        size="small" 
        centered={false}
        trigger={<Button className="mb-1" color="blue" onClick={this.handleOpen}><Icon name="plus" /> Book New Event </Button>} 
        >
        <Header content='Book New Event' />
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Event Name</label>
              <select defaultValue="" name="event" required onChange={this.handleChange}>
                <option value="" disabled>select type of event</option>
                {this.props.events.map((event,i) => <option key={i} value={event.name}>{event.name}</option>)}
              </select>
            </Form.Field>

            {
              this.state.event &&
              <Form.Field>
                <label>Vendor Name</label>
                <select defaultValue="" name="eventId" required onChange={this.handleChange}>
                  <option value="" disabled>select vendor</option>
                  {
                    this.props.events
                    .filter(event => event.name === this.state.event)[0].vendors
                    .map((event, i) => <option key={i} value={event.idEvent}>{event.idVendor.name}</option>)
                  }
                </select>
              </Form.Field>
            }


            <Form.Field>
              <label>Proposed Date</label>
              <DateTimeInput
                required
                name="date"
                placeholder="You can choose up to 3 dates"
                value={typeof this.state.date === "object" ? this.state.date.join(", ") : this.state.date}
                onChange={this.handleDateChange}
                />

              {
                this.state.proposedDate.length !== 0 && 
                  this.state.proposedDate.map((date, i) => {
                    return(
                      <Label key={i}>{moment(date, 'DD-MM-YYYY HH:mm').format('dddd, DD MMMM YYYY [at] hh:mm A')}<Icon name="delete" onClick={() => this.handleDateDelete(i)}/></Label>
                    )
                  })
              }

              <Message negative hidden={!this.state.proposedDateLimit}>
                <Message.Header>Proposed Date Limit!</Message.Header>
                <p>You only allow to proposed 3 dates</p>
              </Message>
            </Form.Field>

            <Form.Group widths="equal">
              <Form.Field>
                <label>Postal / Zip Code</label>
                <input name="postal" type="text" placeholder="postal / zipcode" onChange={this.handleChange} required/>
              </Form.Field>
              <Form.Field>
                <label>Country</label>
                <Dropdown 
                  name="country"
                  placeholder="Select Country"
                  search
                  selection
                  options={countriesMapped}
                  onChange={this.handleCountryChange}/>
              </Form.Field>
 
              <Form.Field>
                <label><br/></label>
                <Button type="button" size="small" onClick={this.handleGetAddress} fluid primary>Generate Address</Button>
              </Form.Field>
            </Form.Group>
  
            <Form.Field>
              <label>Address</label>
              <input 
                name="address" 
                type="text" 
                readOnly 
                required
                value={this.props.isFetching ? 'Loading...' : this.props.message || this.props.address}/>
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
    isFetching: store.locationReducer.isFetching,
    token: store.loginReducer.token,
    events: store.eventReducer.events,
    countries: store.locationReducer.countries,
    address: store.locationReducer.address,
    message: store.locationReducer.message
  }
}

export default connect(mapStateToProps, {getCountries, getAddress, getNormalizedEvents, addBooking})(CompanyBookingAdd);
