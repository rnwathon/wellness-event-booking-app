import React, { Component } from 'react';
import {Card, Table, Button, Icon, Loader, Dimmer} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {getEvents} from './../stores/actions/eventAction';
import VendorEventAdd from './VendorEventAdd';
import VendorEventDelete from './VendorEventDelete';


class VendorEvent extends Component {

  componentDidMount(){
    this.props.getEvents(this.props.token);
  }

  render() {

    const {isFetching, events} = this.props;

    return (
      <Card className="borderless extra-padding" fluid>
        <Card.Content>
          <Dimmer inverted active={isFetching && true}>
            <Loader/>
          </Dimmer>
          <Card.Header>Your Event Services</Card.Header>
          <Card.Meta className="mb-1"> Manage your event services that you can do </Card.Meta>
          <VendorEventAdd />
          <Table basic="very" compact padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Event Name</Table.HeaderCell>
                <Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                  events.length === 0 ?
                    <Table.Row>
                      <Table.Cell colSpan="2" textAlign="center">You have no event service yet.</Table.Cell>
                    </Table.Row>
                  :
                    events.map((event, i) => {
                      return(
                        <Table.Row key={i}>
                          <Table.Cell> {event.name} </Table.Cell>
                          <Table.Cell textAlign="right">
                            <VendorEventDelete id={event._id} />
                          </Table.Cell>
                        </Table.Row>
                      )
                    })
                }
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = store => {
  return{
    token: store.loginReducer.token,
    isFetching: store.eventReducer.isFetching,
    events: store.eventReducer.events
  }
}

export default connect(mapStateToProps, {getEvents})(VendorEvent);