import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Button, Header, Icon, Modal, Form, Label, Message, Dropdown } from 'semantic-ui-react';
import { DateTimeInput } from 'semantic-ui-calendar-react';
import {getCountries, getAddress} from './../stores/actions/locationAction';

class CompanyBookingAdd extends Component {

  state = { 
    modalOpen: false,
    event: '',
    vendor: '',
    date: '',
    proposedDate: [],
    proposedDateLimit: false,
    postal: '',
    country: '',
    address: ''
  }

  componentDidMount(){
    this.props.getCountries();
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
    this.props.getAddress(this.state.postal, this.state.country);
    this.setState({address: this.props.address})
  }

  handleDateChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      if(this.state.proposedDate.length < 3){
        this.setState({ [name] : value })
        let newDate = [...this.state.proposedDate];
        newDate.push(value);
        this.setState({ 
          proposedDate: newDate,
          date: ''
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
      proposedDate: newPropossedDate
    })
  }

  render() {
    // maaped countries list to a new format for Dropdown Component
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
        size="tiny" 
        centered={false}
        trigger={<Button className="mb-1" color="blue" onClick={this.handleOpen}><Icon name="plus" /> Book New Event </Button>} 
        >
        <Header content='Book New Event' />
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Event Name</label>
              <select defaultValue="" name="event" required onChange={this.handleChange}>
                <option value="" disabled>select type of event</option>
                <option>Seminar</option>
                <option>Screening</option>
                <option>Seminar</option>
              </select>
            </Form.Field>

            <Form.Field>
              <label>Vendor Name</label>
              <select defaultValue="" name="vendor" required onChange={this.handleChange}>
                <option value="" disabled>select vendor</option>
                <option>Aburame</option>
                <option>Konohagakure</option>
              </select>
            </Form.Field>

            <Form.Field>
              <label>Proposed Date</label>
              <DateTimeInput
                name="date"
                placeholder="You can choose up to 3 dates"
                value={this.state.date}
                onChange={this.handleDateChange}
                />

              {
                this.state.proposedDate.length !== 0 && 
                  this.state.proposedDate.map((date, i) => {
                    return(
                      <Label key={i}>{date}<Icon name="delete" onClick={() => this.handleDateDelete(i)}/></Label>
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
                <input name="postal" type="text" placeholder="postal / zipcode" onChange={this.handleChange}/>
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
                <Button primary size="tiny" onClick={this.handleGetAddress}>Generate Address</Button>
              </Form.Field>
            </Form.Group>
  
            <Form.Field>
              <label>Address</label>
              <input name="address" type="text" readOnly value={this.props.isFetching ? 'Loading...' : this.props.message || this.props.address}/>
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
    countries: store.locationReducer.countries,
    address: store.locationReducer.address,
    message: store.locationReducer.message
  }
}

export default connect(mapStateToProps, {getCountries, getAddress})(CompanyBookingAdd);
