import React, { Component } from 'react';
import {Header, Card, Table, Button, Icon} from 'semantic-ui-react';


export default class VendorEvent extends Component {
  state = {
    events: [
      {
        name: 'Seminar'
      },
      {
        name: 'Medical Checkup'
      }
    ]
  }

  render() {
    return (
      <Card className="borderless extra-padding" fluid>
        <Card.Content>
          <Card.Header blue>Your Event Services</Card.Header>
          <Card.Meta className="mb-2"> Manage your event services that you can do </Card.Meta>
          <Table basic="very" compact padded>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Event Name</Table.HeaderCell>
                <Table.HeaderCell textAlign="right">Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                  this.state.events === 0 ?
                    <Table.Row>
                      <Table.Cell colSpan="2" textAlign="center">You have no event service yet.</Table.Cell>
                    </Table.Row>
                  :
                    this.state.events.map(event => {
                      return(
                        <Table.Row>
                          <Table.Cell> {event.name} </Table.Cell>
                          <Table.Cell textAlign="right">
                              <Button icon color="green" size="tiny"><Icon name="edit" /></Button>
                              <Button icon color="red" size="tiny"><Icon name="delete" /></Button>
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
