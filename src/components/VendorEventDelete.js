import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteEvent} from './../stores/actions/eventAction';
import { Button, Header, Icon, Modal} from 'semantic-ui-react';

class VendorEventDelete extends Component {

  state = { 
    modalOpen: false,
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleClick = e => {
    console.log(this.props.id);
    this.props.deleteEvent(this.props.token, this.props.id);
    this.handleClose();
  }

  render() {
    return (
      <Modal 
        open={this.state.modalOpen}
        size="tiny" 
        centered={false}
        trigger={<Button icon color="red" size="tiny" onClick={this.handleOpen}><Icon name="delete" /></Button>} 
        >
        <Header content='Are you sure want to delete this event?' />
        <Modal.Actions>
          <Button color='green' onClick={this.handleClick}>
            <Icon name='checkmark'/> Yes
          </Button>
          <Button color='red' onClick={this.handleClose}>
            <Icon name='remove' /> No
          </Button>
        </Modal.Actions>
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

export default connect(mapStateToProps, {deleteEvent})(VendorEventDelete)